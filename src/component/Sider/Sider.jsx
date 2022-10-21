import React from 'react'
import style from './style.module.css'
import {NavLink} from "react-router-dom";

export default function Sider() {
    const activeStyle = {
        backgroundColor:"#ffffff"
    }

    return (
            <div className={style.sider}>
                <ol className={style.wrapper}>
                    <li className={style.item}>
                        <NavLink to={"bom"} style={({isActive}) =>
                            isActive?activeStyle:undefined
                        }>Bom</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to={"research"} style={({isActive}) =>
                                isActive?activeStyle:undefined
                        }>研究成功率计算</NavLink>
                    </li>
                </ol>
            </div>
    )
}