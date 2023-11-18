import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import axiosInstance from "../../Apis/axiosInstance";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/images";

const Register = () => {
    let base = axiosInstance.defaults.baseURL;
    //setfirst(window.google);
    const [user, setUser] = useState();

    const navigate = useNavigate();
    const [value, setValue] = useState();

    const onDateChange = (e) => {
        setValue(e);
    };

    const checkEmailFormat = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    const [isSubscribed, setIsSubscribed] = useState(false);

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        dienthoai: "",
        password: "",
        gioitinh: "",
    });
    const [errors, setErrors] = useState({
        nameError: " ",
        emailError: " ",
        passwordError: " ",
        confirmError: " ",
    });
    const handleChange = (e) => {
        setInputs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleBlur = function (e) {
        if (e.target.type === "email") {
            if (
                checkEmailFormat(e.target.value) === false ||
                e.target.value === ""
            ) {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        emailError: "Email không hợp lệ.",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        emailError: "",
                    };
                });
            }
        }
        if (e.target.name === "password") {
            if (e.target.value.length < 8 || e.target.value === "") {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "Mật khẩu phải ít nhất 8 ký tự.",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "",
                    };
                });
            }
        }
        if (e.target.name === "password2") {
            if (e.target.value.length < 8) {
                setErrors((prev) => {
                    return {
                        ...prev,
                        confirmError: "Mật khẩu phải ít nhất 8 ký tự.",
                    };
                });
            } else {
                if (e.target.value !== inputs.password) {
                    e.target.style.borderColor = "red";
                    setErrors((prev) => {
                        return {
                            ...prev,
                            confirmError: "Mật khẩu không khớp.",
                        };
                    });
                } else {
                    e.target.style.borderColor = "#e5e7eb";
                    setErrors((prev) => {
                        return {
                            ...prev,
                            confirmError: "",
                        };
                    });
                }
            }
        }
        if (e.target.type === "text") {
            if (e.target.value === "") {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        nameError: "Tên không được để trống.",
                    };
                });
            } else {
                e.target.style.borderColor = "#e5e7eb";
                setErrors((prev) => {
                    return {
                        ...prev,
                        nameError: "",
                    };
                });
            }
        }
    };

    const sendRequestSU = async () => {
        const res = await axios
            .post(`${base}api/auth/`, {
                hoten: String(inputs.name),
                email: String(inputs.email),
                password: String(inputs.password),
                sdt: String(inputs.dienthoai),
                gioitinh: String(inputs.gioitinh),
            })
            .catch((err) => {
                /*Swal.fire({
        icon: 'error',
        title: 'Email đã tồn tại',
      });*/
                alert("Email đã tồn tại!");
                console.log(err);
            });
        const data = await res.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        if (errors.emailError !== "" || errors.passwordError !== "") {
            e.preventDefault();
            alert("Register failed!");
        } else {
            e.preventDefault();
            console.log(inputs);
            sendRequestSU()
                .then((data) => {
                    localStorage.setItem("user", JSON.stringify(data.kh));
                    //localStorage.setItem("token",data.token);
                    Cookies.set("token", data.token);
                })
                .then(() => {
                    const id = localStorage.getItem("userId");
                    console.log(id);
                })
                .then(() => navigate("/"));
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
                        <div>
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Tên
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.nameError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={inputs.name}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full text-2xl border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập tên"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <fieldset className="flex">
                                <label className="text-2xl font-medium">
                                    Giới tính:{" "}
                                </label>
                                <input
                                    type="radio"
                                    id="nu"
                                    name="gioitinh"
                                    value="Nữ"
                                    checked={inputs.gioitinh === "Nữ"}
                                    onChange={handleChange}
                                    className="ml-10"
                                />
                                <label
                                    htmlFor="unemployed"
                                    className="block text-2xl font-medium text-gray-700 undefined ml-1"
                                >
                                    Nữ
                                </label>
                                <br />

                                <input
                                    type="radio"
                                    id="nu"
                                    name="gioitinh"
                                    value="Nam"
                                    checked={inputs.gioitinh === "Nam"}
                                    onChange={handleChange}
                                    className="ml-10"
                                />
                                <label
                                    htmlFor="part-time"
                                    className="block text-2xl font-medium text-gray-700 undefined ml-1"
                                >
                                    Nam
                                </label>
                                <br />
                            </fieldset>
                        </div>

                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Email
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.emailError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={inputs.email}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full text-2xl border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập email"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="text-2xl font-medium w-1/2"
                            >
                                Số Điện Thoại
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    value={inputs.dienthoai}
                                    type="number"
                                    name="dienthoai"
                                    onChange={handleChange}
                                    //onBlur={handleBlur}
                                    required
                                    className="w-full border-2 text-2xl border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Mật Khẩu
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.passwordError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    value={inputs.password}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full border-2 text-2xl border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Nhập mật khẩu"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Xác Nhận Mật Khẩu
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.confirmError}
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password2"
                                    onChange={handleChange}
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
                                Đăng Kí
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-lg text-center text-grey-600">
                        Bạn đã có tài khoản?{" "}
                        <span>
                            <a
                                className="text-lg text-purple-600 hover:underline"
                                href="/login"
                            >
                                Đăng nhập
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
