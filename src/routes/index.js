import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import Model3D from "../Pages/Model3D";
import Contact from "../Pages/Contact";
import ChangePassword from "../Pages/ChangePassword";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/3d-model", component: <Model3D /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/login", component: <Login />, layout: null },
    { path: "/register", component: <Register />, layout: null },
    { path: "/contact", component: <Contact />},
    { path: "/change-password", component: <ChangePassword />},
];

export { publicRoutes };
