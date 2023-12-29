import axiosInstance from "./axiosInstance";

//GET LIST PATH .contains(path)
const getListPrismPaths = async (containPath) => {
    return await axiosInstance.get(`/api/Prism/listPath?path=${containPath}`);
};

const getListBodyCompPaths = async (containPath) => {
    return await axiosInstance.get(`/api/bodyComp/listPath?path=${containPath}`);
};

const getPrismGeojson = async (path) => {
    return await axiosInstance.get(`/api/Prism/path?path=${path}`);
}

export default {
    getListPrismPaths,
    getListBodyCompPaths,
    getPrismGeojson
}