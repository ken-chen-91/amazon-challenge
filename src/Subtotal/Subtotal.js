import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "../function/StateProvider/StateProvider";
import {getBasketTotal} from '../function/Ruducer/reducer'

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    // <>不会增加dom额外的节点
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
