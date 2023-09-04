import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PublicLayout from "../layouts/PublicLayout";
import Register from "../Pages/Register";
import Private from "../layouts/PrivateLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "dashboard",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    }
                ]
            }
        ]
    },
])