import React, {useRef, useState} from 'react'

import style from "./styled.module.css"

export default function Bom() {
    const [material, setMaterial] = useState({
        m1: 0,
        m2: 0,
        m3: 0,
        m4: 0,
        m5: 0,
        mx: 0
    })
    const [product, setProduct] = useState({
        L: 0,
        LP: 0,
        O: 0,
        OP: 0,
        H: 0,
        HP: 0,
        S: 0,
        SP: 0
    })


    const handlerInput = (e) => {
        const newProduct = product
        newProduct[e.target.name] = e.target.value
        const {L, LP, H, HP, O, OP, S, SP} = newProduct

        const newMaterial = {
            m1: 3 * L + 5 * H,
            m2: 6 * OP + 7 * S + 4 * SP,
            m3: 4 * O,
            m4: 4 * L + 2 * LP,
            m5: 4 * O + 3 * S + 7 * SP,
            mx: 6 * SP + 9 * HP
        }
        setProduct(newProduct)
        setMaterial(newMaterial)

    }
    const handleReset = () => {
        setProduct({
            L: 0,
            LP: 0,
            O: 0,
            OP: 0,
            H: 0,
            HP: 0,
            S: 0,
            SP: 0
        })
        setMaterial({
            m1: 0,
            m2: 0,
            m3: 0,
            m4: 0,
            m5: 0,
            mx: 0
        })

    }


    return (
            <div className={style.Wrapper}>
                <div className={style.product}>
                    <ul className={style.productWrapper}>
                        <li className={style.productItem}>
                            <label htmlFor="">L</label>
                            <input name="L" value={product.L} onChange={handlerInput} />
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">L改</label>
                            <input name="LP" value={product.LP} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">H</label>
                            <input name="H" value={product.H} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">H改</label>
                            <input name="HP" value={product.HP} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">O</label>
                            <input name="O" value={product.O} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">O改</label>
                            <input name="OP" value={product.OP} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">S</label>
                            <input name="S" value={product.S} onChange={handlerInput}/>
                        </li>
                        <li className={style.productItem}>
                            <label htmlFor="">S改</label>
                            <input name="SP" value={product.SP} onChange={handlerInput}/>
                        </li>
                    </ul>
                    <button className={style.reset} onClick={handleReset}>reset</button>
                </div>
                <div className={style.material}>
                    <ul className={style.materialWrapper}>
                        <li className={style.materialItem}>
                            <label htmlFor="">m1</label>
                            <input value={material.m1}/>
                        </li>
                        <li className={style.materialItem}>
                            <label htmlFor="">m2</label>
                            <input value={material.m2}/>
                        </li>
                        <li className={style.materialItem}>
                            <label htmlFor="">m3</label>
                            <input value={material.m3}/>
                        </li>
                        <li className={style.materialItem}>
                            <label htmlFor="">m4</label>
                            <input value={material.m4}/>
                        </li>
                        <li className={style.materialItem}>
                            <label htmlFor="">m5</label>
                            <input value={material.m5}/>
                        </li>
                        <li className={style.materialItem}>
                            <label htmlFor="">mx</label>
                            <input value={material.mx}/>
                        </li>

                    </ul>
                </div>
            </div>
    )
}
