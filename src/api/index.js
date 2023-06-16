import base from "./base";
import axios from "@/utils/request";

const api = {
    getDatCount() {
        return axios.get(base.dataCount)
    },


    getDataInfo() {
        return axios.get(base.dataInfo)
    },


    getdataFormat() {
        return axios.get(base.dataFormat)
    },


    getProjectList(params) {
        return axios.get(base.projectList,{params})
    },


    getSearch(params) {
        return axios.get(base.getSearch, { params})
    },

    getDelete(params) {
        return axios.get(base.getDelete,{params})
    }
    // getSearch(search) {
    //     return axios.get(base.getSearch, {
    //         params: {
    //             search
    //         }
    //     })
    // }
}

export default api;