import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import SingleToy from "../Pages/SingleToy/SingleToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Registration></Registration>
            },
            {
                path: '/all-toy',
                element: <AllToys></AllToys>,
                loader: () => fetch(`https://turbo-toys-server.vercel.app/toys`)
            },
            {
                path: '/all-toy/:id',
                element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
                loader: ({params})=> fetch(`https://turbo-toys-server.vercel.app/toys/${params.id}`)
            },
            {
                path: '/my-toys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: '/my-toys/:id',
                element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
                loader: ({params})=> fetch(`https://turbo-toys-server.vercel.app/toys/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }

        ]
    },
]);

export default router