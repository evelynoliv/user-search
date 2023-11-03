import {createBrowserRouter} from "react-router-dom"
import FetchUsers from "../Components/FetchUsers/FetchUsers"
import UserList from "../Components/UserList/UserList"

const router = createBrowserRouter(

    [
        {
        path:"/",
        element: <UserList />,
        },

        {
            path:"/pegar",
            element: <FetchUsers />,
            }
    ]
    
)

export default router
