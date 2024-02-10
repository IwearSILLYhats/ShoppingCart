import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Blog from "../Blog";
import Contact from "../Contact"
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Store from "../Store";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "store",
                    element: <Store />,
                },
                {
                    path: "blog",
                    element: <Blog />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;