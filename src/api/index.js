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
    }
}

export default api;