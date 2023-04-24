import React from "react";
import CardMobile from "../../component/CardMobile";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteAction,
    postOrder,
    tangGiam,
} from "../../redux/reducers/cartReducer";
import { USER_LOGIN, getStoreJSON } from "../../util/config";

export default function CartMobile() {
    const { gioHang } = useSelector((state) => state.cartReducer);
    console.log({ gioHang });
    const dispatch = useDispatch();
    const renderCartMobile = () => {
        return gioHang.map((prod, index) => {
            return (
                <CardMobile
                    key={index}
                    prod={prod}
                    tangGiamSL={tangGiamSL}
                    deleteCart={deleteCart}
                />
            );
        });
    };
    const tangGiamSL = (id, bool) => {
        let value = {
            id,
            bool,
        };
        const action = tangGiam(value);
        dispatch(action);
    };
    const deleteCart = (id) => {
        console.log({ id });
        const action = deleteAction(id);
        dispatch(action);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        let { email } = getStoreJSON(USER_LOGIN);

        let order = {
            email: email,
            orderDetail: gioHang,
        };
        const action = postOrder(order); // truyển data order
        dispatch(action);
    };
    return (
        <div className="cartMobile">
            <h2>Cart</h2>
            <div className="list-item">
                {gioHang.length === 0 ? (
                    <p className="notData">Not Data</p>
                ) : (
                    renderCartMobile()
                )}
            </div>
            <div className="submitOrder">
                <button
                    className="btn btn-danger"
                    style={
                        gioHang.length === 0
                            ? { display: "none" }
                            : { display: "block" }
                    }
                    onClick={handleSubmit}
                >
                    submit order
                </button>
            </div>
        </div>
    );
}
