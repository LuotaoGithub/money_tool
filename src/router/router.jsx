import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx";
import Bom from "../pages/Bom/Bom";
import Research from "../pages/Research/Research";

const router = createBrowserRouter([
    {
        path :"/",
        element : <App/>,
        children:[
            {
                path:"bom",
                element:<Bom/>
            },
            {
                path:"research",
                element:<Research/>
            }
        ]
    }

])

export default router