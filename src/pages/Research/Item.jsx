import React, {useState} from 'react'
import style from "./styel.module.css";

export default function Item(props) {
    const name = props.name
    const baseMoney = props.baseMoney
    const baseCapacity = props.baseCapacity
    const miniMoney = props.miniMoney
    const [state,setState] = useState({
        money:0,
        capacity:0,
        success:0
    })

    const handleChange = (e) => {
        const newState = {
            money:state.money,
            capacity:state.capacity,
            success:state.success
        }
        newState[e.target.name] = parseInt(e.target.value)
        newState.success = (newState.money / baseMoney) * 0.8 + (newState.capacity - baseCapacity) / 100 * 0.2
        setState(newState)
    }

    return (
            <li className={style.item}>
                <h1>{name}</h1>
                <ul className={style.itemInput}>
                    <li className={style.singleInput}>
                        <label htmlFor="">投入资金</label>
                        <input name="money" type="number" value={state.money} onChange={handleChange}/>
                    </li>
                    <li className={style.singleInput}>
                        <label htmlFor="">投入的研发人员研发能力</label>
                        <input name="capacity" type="number" value={state.capacity} onChange={handleChange}/>
                    </li>
                    <li className={style.singleInput}>
                        <label htmlFor="">基本研发能力要求</label>
                        <input  type="number" disabled={true} defaultValue={baseCapacity}/>
                    </li>
                    <li className={style.singleInput}>
                        <label htmlFor="">最少投放资金</label>
                        <input  type="number" disabled={true} defaultValue={miniMoney}/>
                    </li>


                </ul>
                <h1>成功率 : {(state.success*100-40).toFixed(2)}~{(state.success*100-20).toFixed(2)}%</h1>
            </li>
    )
}