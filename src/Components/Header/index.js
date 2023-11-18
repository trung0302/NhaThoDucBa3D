import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import images from "../../assets/images";
// import Menu from "./Menu";

import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Login, Logout, Settings, Menu as MenuIcon } from "@mui/icons-material";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Button } from "@mui/material";

function Header() {
    console.log(document.cookie.indexOf("token"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem("user"));

    const formatUserName = (tenUser) => {
        if (tenUser?.length <= 8) {
            return tenUser;
        } else {
            return tenUser?.substring(0, 8) + "...";
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
        localStorage.removeItem("user");
        //localStorage.removeItem("token");
        Cookies.remove("token");
        navigate("/");
    };
    const handleClose1 = () => {
        setAnchorEl(null);
        //localStorage.removeItem("user");
        //localStorage.removeItem("token");
        //Cookies.remove('token')
    };
    return (
        <div>
            <div className="h-[90px] w-full bg-yellow-500 fixed top-0 right-0 left-0 z-50 flex items-center justify-around">
                <Link to="/">
                    <img
                        src={images.logo}
                        alt="logo"
                        className="h-[80px] object-cover ml-[36px]"
                    />
                </Link>
                <ul className="flex ">
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
                </ul>
                <div>
                    {document.cookie.indexOf("token") !== -1 ? (
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: -0.2 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            {/*<PersonOutlinedIcon
                                    style={{ color: "#fff", fontSize: "28px" }}
                                />*/}

                            <div className={styles.userr}>
                                <img
                                    src={
                                        user.image.length !== 0
                                            ? user.image[0].url
                                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNjtjpEZtAtYMoeDfg6PO5DoGrpAhCA79Jg&usqp=CAU"
                                    }
                                    alt="User Image"
                                    className={styles.userr_image}
                                />
                                <p
                                    className={styles.menuItemLink}
                                    style={{ color: "white" }}
                                >
                                    {formatUserName(user.hoten)}
                                </p>
                            </div>
                        </IconButton>
                    ) : (
                        <Link to="/login">
                            <Button variant="contained" sx={{ fontSize: "16px"}} color="primary"
                                className="py-4 px-10 rounded-[8px] bg-sky-500 text-white flex justify-end 
                            text-[16px] hover:bg-sky-400"
                            >
                                Đăng nhập
                            </Button>
                        </Link>
                    )}
                    {/*</Tooltip>*/}
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose1}
                        onClick={handleClose1}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 0,
                                "& .MuiAvatar-root": {
                                    width: 40,
                                    height: 32,
                                    ml: 0,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 80,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <Link to="/customer/info">
                            <MenuItem
                                onClick={handleClose1}
                                sx={{ fontSize: 15 }}
                            >
                                <ListItemIcon>
                                    <PersonIcon fontSize="large"></PersonIcon>
                                </ListItemIcon>
                                Đổi mật khẩu
                            </MenuItem>
                        </Link>
                        <Divider />

                        {document.cookie.indexOf("token") == -1 ? (
                            <Link to="/login">
                                <MenuItem
                                    onClick={handleClose1}
                                    sx={{ fontSize: 15 }}
                                >
                                    <ListItemIcon>
                                        <Login fontSize="large" />
                                    </ListItemIcon>
                                    Đăng nhập
                                </MenuItem>
                            </Link>
                        ) : (
                            <MenuItem
                                onClick={handleClose2}
                                sx={{ fontSize: 15 }}
                            >
                                <ListItemIcon>
                                    <Logout fontSize="large" />
                                </ListItemIcon>
                                Đăng xuất
                            </MenuItem>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
