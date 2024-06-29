import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { MyWallets } from "./components/MyWalletsPage/MyWallets"

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
])