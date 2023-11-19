import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import images from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
    return (
        <div className="bg-yellow-500">
            <Grid container spacing={2}>
                <Grid item xs={5} container direction={"column"} className="flex items-center justify-around border-r border-solid border-white pr-4" style={{margin: "20px 0"}}>
                    <Link to="/">
                        <img
                            src={images.logo}
                            alt="logo"
                            className="h-[80px] object-cover mb-2"
                        />
                    </Link>
                    <p style={{color: "#ffffff"}}>Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</p>
                </Grid>
                <Grid item xs={7}>
                    <ul className="flex mb-3">
                        <li className="mx-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.item
                                }
                                end
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="mx-8">
                            <NavLink
                                to="/3d-model"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.item
                                }
                                end
                            >
                                Mô hình 3D
                            </NavLink>
                        </li>
                        <li className="mx-8">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? styles.active : styles.item
                                }
                                end
                            >
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>
                    <hr className="mb-3"></hr>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <b style={{color: "#ffffff"}} className="ml-8">Theo dõi chúng tôi</b><br/>
                            <div className="mt-3">
                                <Link to="/" className="mr-12 ml-8">
                                    <FacebookIcon sx={{ fontSize: 30, color: "white" }}></FacebookIcon>
                                </Link>
                                <Link to="/" className="mr-12">
                                    <TwitterIcon sx={{ fontSize: 30, color: "white" }}></TwitterIcon>
                                </Link>
                                <Link to="/" className="mr-12">
                                    <EmailIcon sx={{ fontSize: 30, color: "white" }}></EmailIcon>
                                </Link> 
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <Link to="/" style={{display:"inline-block"}}>
                                <img
                                    src={images.position}
                                    alt="position image"
                                    className="h-[90px]"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
