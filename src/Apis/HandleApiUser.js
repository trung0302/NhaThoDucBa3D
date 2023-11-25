import axiosInstance from "./axiosInstance";

//POST
const login = async (data) => {
    return await axiosInstance.post(`/api/auth/login`, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
};
