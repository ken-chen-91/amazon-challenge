import React from "react";
import {useStateValue} from "../function/StateProvider/StateProvider";
import "./Product.css";

const Product = ({id, title, price, image, rating}) => {

    // [Provider,Consumer] = useContext;  = [state,setState] = useState()
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill()
                        .map((star,i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
