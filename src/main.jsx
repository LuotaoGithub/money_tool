import React from "react";
import ReactDom from "react-dom"
import {RouterProvider} from "react-router-dom";
import router from "./router/router.jsx";


ReactDom.render(
        <RouterProvider router={router}/>

        , document.getElementById("root"))