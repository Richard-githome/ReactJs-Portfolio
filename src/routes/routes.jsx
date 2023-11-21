import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import HomeComponent from "../components/Root";

const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <div> Omoo, an error just happened. Need attention.</div>,
        children: [
            {
                path: "/",
                element: <HomeComponent />
            },
        ]
    },
    {
        path: "/*",
        element: <div>404 | Not Found</div>
    }
])

export default routes;