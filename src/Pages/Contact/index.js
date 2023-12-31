import { useState } from "react";
import style from "./Contact.module.css";
// import HandleApiForm from '../../Apis/HandleApiForm';
import Swal from "sweetalert2";
import HandleApiContact from "../../Apis/HandleApiContact";

function checkEmailFormat(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sdt, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [errorMobile, setErrorMobile] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async function (e) {
        e.preventDefault();
        if (
            name === "" ||
            email === "" ||
            sdt === "" ||
            message === "" ||
            errorEmail !== "" ||
            errorMobile !== "" ||
            errorMessage !== ""
        ) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Thất bại!",
                html: "<h1>Vui lòng điền đầy đủ thông tin hợp lệ!</h1>",
                showConfirmButton: false,
                timer: 1200,
            });
        } else {
            const data = { name, email, sdt, message };
            HandleApiContact.submitForm(data)
                .then((data) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thành công!",
                        html: "<h1>Gửi phản hồi thành công!</h1>",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                    setName("");
                    setEmail("");
                    setMobile("");
                    setMessage("");
                })
                .catch((err) => console.log(err));
        }
    };
    const handleChange = function (e) {
        if (e.target.type === "text") {
            setName(e.target.value);
        }
        if (e.target.type === "email") {
            setEmail(e.target.value);
        }
        if (e.target.type === "tel") {
            setMobile(e.target.value);
        }
        if (e.target.className === "textarea") {
            setMessage(e.target.value);
        }
    };
    const handleBlur = function (e) {
        if (e.target.value === "") {
            e.target.style.borderColor = "red";
        } else if (
            e.target.type === "tel" &&
            Number.isInteger(Number(e.target.value)) !== true
        ) {
            setErrorMobile("Số điện thoại không hợp lệ!");
        } else if (
            e.target.type === "email" &&
            checkEmailFormat(e.target.value) === false
        ) {
            setErrorEmail("Email không hợp lệ!");
        } else if (e.target.className === "textarea" && e.target.value === "") {
            setErrorMessage("Message không được để trống!");
        } else {
            e.target.style.borderColor = "#777777";
            if (e.target.type === "tel") {
                setErrorMobile("");
            }
            if (e.target.type === "email") {
                setErrorEmail("");
            }
            if (e.target.className === "textarea") {
                setErrorMessage("");
            }
        }
    };

    return (
        <div className={style.contactLayer}>
            <div className={style.contactLayout + " shadow-2xl"}>
                <div className={style.contactImage}></div>
                <div className={style.contactForm}>
                    <p className={style.contactTitle}>
                        Vui lòng để lại thông tin liên lạc để nhận tư vấn từ bộ
                        phận chăm sóc khách hàng hoặc các chính sách của
                        Website!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className={style.contactItem}>
                            <label className={style.contactLabel}>
                                Họ và tên
                            </label>
                            <input
                                className={style.contactInput}
                                type={"text"}
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={name}
                            ></input>
                        </div>
                        <div className={style.contactItem}>
                            <label
                                className={style.contactLabel}
                                style={{ marginTop: "10px" }}
                            >
                                Email
                            </label>
                            <input
                                className={style.contactInput}
                                type={"email"}
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={email}
                            ></input>
                            <p style={{ color: "red", padding: "4px" }}>
                                {errorEmail}
                            </p>
                        </div>
                        <div className={style.contactItem}>
                            <label className={style.contactLabel}>
                                Số điện thoại
                            </label>
                            <input
                                className={style.contactInput}
                                type={"tel"}
                                required
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={sdt}
                            ></input>
                            <p style={{ color: "red", padding: "4px" }}>
                                {errorMobile}
                            </p>
                        </div>
                        <div className={style.contactItem}>
                            <label className={style.contactLabel}>
                                Tin nhắn
                            </label>
                            <textarea
                                className="textarea"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={message}
                            ></textarea>
                        </div>
                        <button
                            className={style.contactSend}
                            onClick={handleSubmit}
                        >
                            Gửi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
