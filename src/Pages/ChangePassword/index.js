import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ChangePassword.module.css";
import axiosInstance from "../../Apis/axiosInstance";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/images";
import Swal from "sweetalert2";

const ChangePassword = () => {
    let base = axiosInstance.defaults.baseURL;
    //setfirst(window.google);

    const navigate = useNavigate();
    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errors, setErrors] = useState({
        newPassError: " ",
        currentPassError: " ",
        confirmPassError: " ",
    });

    const handleCurrentPassChange = (e) => {
        setCurrentPass(e.target.value);
    };

    const handleNewPassChange = (e) => {
        setNewPass(e.target.value);
    };

    const handleConfirmPassChange = (e) => {
        setConfirmPass(e.target.value);
    };

    const handleBlur = function (e) {
        if (e.target.name === "currentPass") {
            if (e.target.value === "") {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        currentPassError: "Vui lòng nhập mật khẩu!",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        currentPassError: "",
                    };
                });
            }
        }
        if (e.target.name === "newPass") {
            if (e.target.value.length < 8) {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        newPassError: "Mật khẩu phải ít nhất 8 ký tự.",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        newPassError: "",
                    };
                });
            }
        }
        if (e.target.name === "confirmPass") {
            if (e.target.value !== newPass) {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        confirmPassError: "Xác nhận mật khẩu không khớp!",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        confirmPassError: "",
                    };
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            errors.confirmPassError !== "" ||
            errors.currentPassError !== "" ||
            errors.newPassError !== ""
        ) {
            Swal.fire({
                title: "Vui lòng nhập đầy đủ thông tin!",
                icon: "error",
                showConfirmButton: true,
                timer: 1500,
            });
        }
    };

    return (
        <div>
            <div
                className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50"
                style={{
                    backgroundImage: `url(${images.loginBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    padding: "30px",
                }}
            >
                <div className="">
                    <a href="/">
                        <h3 className="text-7xl font-bold text-yellow-500">
                            Nhà thờ Đức Bà
                        </h3>
                    </a>
                </div>
                <div className="w-full p-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-5xl sm:rounded-lg">
                    <form>
                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Mật Khẩu hiện tại
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.currentPassError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={currentPass}
                                    type="password"
                                    name="currentPass"
                                    onBlur={handleBlur}
                                    onChange={handleCurrentPassChange}
                                    className="w-full border-2 text-2xl border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập mật khẩu hiện tại"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Mật Khẩu mới
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.newPassError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={newPass}
                                    type="password"
                                    name="newPass"
                                    onBlur={handleBlur}
                                    onChange={handleNewPassChange}
                                    className="w-full border-2 text-2xl border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập mật khẩu mới"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Xác Nhận Mật Khẩu
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.confirmPassError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={confirmPass}
                                    type="password"
                                    name="confirmPass"
                                    onChange={handleConfirmPassChange}
                                    onBlur={handleBlur}
                                    className="w-full border-2 text-2xl border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Xác nhận mật khẩu"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                onClick={handleSubmit}
                                className="text-2xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold"
                            >
                                Thay đổi mật khẩu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
