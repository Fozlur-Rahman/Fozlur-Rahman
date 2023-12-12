import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../Admin/Admin";
import Projects from "../Admin/Projects";
import Followers from "../Admin/Followers";
import AdminHome from "../Admin/AdminHome";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/admin',
        element: <Admin></Admin>,
        children: [
            {
                path: '/admin',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/admin/projects',
                element: <Projects></Projects>
            },
            {
                path: "/admin/followers",
                element: <Followers></Followers>
            },
            {
                path: "/admin/newProject",
                element: <Followers></Followers>
            }
        ]
    }

])