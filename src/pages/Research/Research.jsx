import React, {useState} from 'react'
import style from "./styel.module.css"
import Item from "./Item.jsx";

export default function Research() {
    const researchList = [
        {
            name:"L改",
            miniMoney:100000,
            baseCapacity:50,
            baseMoney:300000
        },
        {
            name:"H",
            miniMoney:300000,
            baseCapacity:100,
            baseMoney: 1000000
        },
        {
            name:"H改",
            miniMoney:100000,
            baseCapacity:50,
            baseMoney: 420000
        },
        {
            name:"O",
            miniMoney:1000000,
            baseCapacity:100,
            baseMoney: 2000000
        },
        {
            name:"O改",
            miniMoney:300000,
            baseCapacity:30,
            baseMoney: 840000
        },
        {
            name:"S",
            miniMoney:1500000,
            baseCapacity:100,
            baseMoney: 3000000
        },
        {
            name:"S改",
            miniMoney:300000,
            baseCapacity:30,
            baseMoney: 840000
        }
    ]

    return (
            <div className={style.wrapper}>
                <ul className={style.content}>
                    {researchList.map((item) => {
                       return <Item name={item.name} miniMoney={item.miniMoney} baseCapacity={item.baseCapacity} baseMoney={item.baseMoney}/>
                    })}
                </ul>
            </div>
    )
}