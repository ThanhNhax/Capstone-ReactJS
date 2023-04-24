import React from "react";

export default function CardMobile({ prod, tangGiamSL, deleteCart }) {
    return (
        <div className="cardCartMobile row">
            <div className="col-4 cart-img">
                <img src={prod.image} alt="imame" />
            </div>
            <div className="col-6 cart-title">
                <h3>{prod.name}</h3>
                <p className="price">
                    {prod.price * prod.quantity}
                    <span>$</span>
                </p>
                <div className="upDown">
                    <span onClick={() => tangGiamSL(prod.productId, false)}>
                        -
                    </span>
                    <span>{prod.quantity}</span>
                    <span onClick={() => tangGiamSL(prod.productId, true)}>
                        +
                    </span>
                </div>
            </div>
            <div className="col-2 cart-trash">
                <button onClick={() => deleteCart(prod.productId)}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
}
