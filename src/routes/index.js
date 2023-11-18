import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/login", component: <Login />, layout: null },
    { path: "/register", component: <Register />, layout: null },
];

export { publicRoutes };
