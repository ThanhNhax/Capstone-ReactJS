import React from "react";
import { NavLink } from "react-router-dom";
export default function Product({ product }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={product.image} alt="..." />
            </div>
            <div className="card-body">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <NavLink to={`/detail/${product.id}`}>Buy now</NavLink>
            </div>
        </div>
    );
}
