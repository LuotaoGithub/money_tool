import React from 'react'

import 'antd/dist/antd.css'
import "reset.css/reset.css"
import Header from "./component/Header/Header.jsx";
import Sider from "./component/Sider/Sider.jsx";
import styled from "./App.module.css"
import {Outlet} from "react-router-dom";

export default function App() {
    return (
            <div className={styled.wrapper}>
                <Header/>
                <div className={styled.main}>
                    <Sider/>
                    <div className={styled.content}>
                        <Outlet/>
                    </div>
                </div>

            </div>
    )
}
