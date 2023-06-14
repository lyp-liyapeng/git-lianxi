/* 
二次封装axios，在原来的基础之上新增功能
方便复用和维护
*/
// 导入axios
import axios from 'axios';
// 导入querystring
import qs from 'querystring';

// 可以使用自定义配置新建一个 axios 实例    axios.create([config])
let instance = axios.create({
    // 可以共用，配置基础路径；如果请求的地址的基础路径不同，不需要配置baseURL
    // baseURL: 'https://interface.music.163.com',//请求地址的基础路径
    timeout: 5000,//请求响应时长，如果5s后后端没有响应数据，停止请求
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // config  : 对象  请求方式、参数等信息
    // console.log('config', config);
    // 在发送请求之前做些什么
    // 发送请求之前，把post请求的参数转换为字符串
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    // console.log('error------------------', error);
    // message：错误信息   response.status：状态码
    ErrorHandle(error.response.status, error.message);//调用函数，给了两个实参：状态码，错误信息

    return Promise.reject(error);
});

function ErrorHandle(status, message) {//形参接收实参的数据
    switch (status) {
        case 400:
            console.log('400-表示请求报文中存在语法错');
            break;
        case 401:
            console.log('401-未经许可，需要通过HTTP认证');
            break;
        case 403:
            console.log('403-服务器拒绝该次访问（访问权限出现问题）');
            break;
        case 404:
            console.log('404-表示服务器上无法找到请求的资源');
            break;
        case 500:
            console.log('500-表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；');
            break;
        case 503:
            console.log('503-表示服务器暂时处于超负载或正在进行停机维护，无法处理请求');
            break;
        default:
            console.log(message);
            break;
    }
}




// 导出
export default instance;