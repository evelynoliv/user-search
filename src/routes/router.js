import {createBrowserRouter} from "react-router-dom"
import FetchUsers from "../Components/UserTable/UserTable"
import UserTable from "../Components/UserTable/UserTable"

const router = createBrowserRouter(

    [
        {
        path:"/home",
        element: <UserTable />,
        },

        {
            path:"/usuarios",
            element: <FetchUsers />,
            }
    ]
    
)

export default router
