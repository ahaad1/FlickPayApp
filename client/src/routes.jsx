import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { MyWallets } from "./components/MyWalletsPage/MyWallets"
import { Login_or_Registraton } from "./components/Login_or_Registraton/Login_or_Registraton"

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MyWallets />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login_or_Registraton />,
    }
]);