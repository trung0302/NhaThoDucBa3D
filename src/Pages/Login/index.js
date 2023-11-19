import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import images from "../../assets/images";
// import ForgetPass from "./ForgetPass/ForgetPass";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Apis/axiosInstance";

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    let base = axiosInstance.defaults.baseURL;

    const [first, setfirst] = useState(0);
    //setfirst(window.google);
    const [user, setUser] = useState();

    const handleLoginSuccess = (response) => {
        // TODO: xử lý idToken ở đây
        // setUser(response);
        var userObject = jwtDecode(response.credential);
        //setProfile(userObject);

        console.log(response.credential);
        const data = {
            idToken: response.credential,
        };
    };

    const handleLoginFailure = (response) => {
        console.log("Login failed: ", response);
    };

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const checkEmailFormat = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
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
                        emailError: "Email không hợp lệ",
                    };
                });
            } else {
                e.target.style.borderColor = "#fff";
                setErrors((prev) => {
                    return {
                        ...prev,
                        emailError: "",
                    };
                });
            }
        }
        if (e.target.type === "password") {
            if (e.target.value.length < 8 || e.target.value === "") {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "Mật khẩu phải dài hơn 8 ký tự.",
                    };
                });
            } else {
                e.target.style.borderColor = "#fff";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "",
                    };
                });
            }
        }
    };

    const sendRequestSU = async () => {
        const res = await axios
            .post(`${base}api/auth/login`, {
                email: String(inputs.email),
                password: String(inputs.password),
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Mật khẩu hoặc email không đúng",
                });
                console.log(err);
            });
        const data = await res.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        if (errors.emailError !== "" || errors.passwordError !== "") {
            e.preventDefault();
            // alert("Vui lòng nhập đầy đủ và đúng định dạng!");
            Swal.fire({
                icon: "error",
                title: "Vui lòng nhập đầy đủ và đúng định dạng!",
                timer: 1500,
            });
        } else {
            e.preventDefault();
            sendRequestSU()
                .then((data) => {
                    localStorage.setItem("user", JSON.stringify(data.findKH));
                    //localStorage.setItem("token",data.token);
                    if (isChecked) {
                        Cookies.set("token", data.token, {
                            expires: 30,
                        });
                    } else {
                        Cookies.set("token", data.token, {
                            expires: undefined,
                        });
                    }
                })
                //.then(()=>setIsLogin(true))
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
                    <Link to="/">
                        <h3 className="text-7xl font-bold text-yellow-500 mb-12">
                            Nhà thờ Đức Bà
                        </h3>
                    </Link>
                </div>
                <div className=" w-11/12 max-w-[700px] p-12 rounded-3xl bg-white border-2 border-gray-100">
                    <h1 className="text-5xl font-semibold text-center">
                        Đăng Nhập
                    </h1>
                    <p className="font-medium text-2xl text-gray-500 mt-4 text-center">
                        Chào mừng trở lại với Website Nhà thờ Đức Bà!
                    </p>
                    <div className="mt-8">
                        <div className="flex flex-col">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Email
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.emailError}
                                </p>
                            </div>
                            <input
                                value={inputs.email}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="w-full text-2xl border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Nhập email của bạn"
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex">
                                <label className="text-2xl font-medium w-1/2">
                                    Mật Khẩu
                                </label>
                                <p className="text-2xl font-medium w-1/2 text-right text-red-600">
                                    {errors.passwordError}
                                </p>
                            </div>
                            <input
                                value={inputs.password}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="text-2xl w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Nhập mật khẩu của bạn"
                            />
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <div>
                                <input
                                    className="pt-6"
                                    type="checkbox"
                                    id="remember"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label
                                    className="ml-2 font-medium text-lg pb-10"
                                    for="remember"
                                >
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            {/* <button
                                onClick={() => setModal(true)}
                                className="font-medium text-lg text-violet-500"
                            >
                                Quên mật khẩu?
                            </button> */}
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                onClick={handleSubmit}
                                className="text-2xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-yellow-600 rounded-xl text-white font-bold "
                            >
                                Đăng Nhập
                            </button>
                        </div>
                        {/* <div className="mt-2 flex justify-center items-center">
                            <p className="font-medium text-lg">
                                Bạn chưa có tài khoản?
                            </p>
                            <button
                                onClick={() => {
                                    navigate("/register");
                                }}
                                className="ml-2 font-medium text-lg text-violet-500"
                            >
                                Đăng kí ngay!
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

{
    /* {modal && (
    <ForgetPass
        closewindow={setModal}
        handleChange={handleChange}
        handleBlur={handleBlur}
        inputs={inputs}
        errors={errors}
    ></ForgetPass>
)} */
}
