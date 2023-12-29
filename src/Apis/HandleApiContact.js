import axiosInstance from "./axiosInstance";

//POST
const submitForm = async (data) => {
    return await axiosInstance.post(`/api/Feedbacks`, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    submitForm,
};
