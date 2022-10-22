import React, {useState} from 'react'

import style from "./style.module.css"

export default function Product() {
    const [state, setState] = useState({
        lowWorker: 0,
        highWorker: 0,
        manager: 0,
        useRatio: 0,
        tech: 0,
        productTech: 0,
        maxProduct: 500,
        production: 0
    })

    const handleChange = (e) => {
        let newState = {...state}
        newState[e.target.name] = parseInt(e.target.value)

        let production = (newState.lowWorker * 10 + newState.highWorker * 20) * (1 + 0.25 * newState.manager) * (newState.useRatio / 100)

        production = production >= state.maxProduct ? state.maxProduct : production

        newState.production = production * (newState.tech - newState.productTech)

        setState(newState)
    }

    return (
            <div className={style.wrapper}>
                <ul className={style.input}>
                    <li className={style.inputItem}>
                        <label htmlFor="">初级工人数量</label>
                        <input name={"lowWorker"} type="number" value={state.lowWorker} onChange={handleChange}/>人
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">高级工人数量</label>
                        <input name={"highWorker"} type="number" value={state.highWorker} onChange={handleChange}/>人
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">管理人员数量</label>
                        <input name={"manager"} type="number" value={state.manager} onChange={handleChange}/>人
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">人员利用率</label>
                        <input name={"useRatio"} type="number" value={state.useRatio} onChange={handleChange}/>%
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">生产线技术水平</label>
                        <input name={"tech"} type="number" value={state.tech} onChange={handleChange}/>
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">产品工艺水平</label>
                        <input name={"productTech"} type="number" value={state.productTech} onChange={handleChange}/>
                    </li>
                    <li className={style.inputItem}>
                        <label htmlFor="">生产线最大产能</label>
                        <input name={"maxProduct"} type="number" value={state.maxProduct} onChange={handleChange}/>
                    </li>
                    <li>
                        <h1 className={style.output}>产量 : {state.production}</h1>
                    </li>
                </ul>
            </div>
    )
}