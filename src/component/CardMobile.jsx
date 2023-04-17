import React from "react";

export default function CardMobile() {
    return (
        <div className="cardCartMobile row">
            <div className="col-4 cart-img">
                <img
                    src="https://shop.cyberlearn.vn/images/nike-sp-dunk.png"
                    alt=""
                />
            </div>
            <div className="col-7 cart-title">
                <h3>Name</h3>
                <p className="price">
                    235.000.000 <span>vnd</span>
                </p>
                <div className="upDown">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
            <div className="col-1">
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    );
}
