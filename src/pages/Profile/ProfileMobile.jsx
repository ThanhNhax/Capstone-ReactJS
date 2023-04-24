import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";
import { ACCESS_TOKEN, getStore } from "../../util/config";
import moment from "moment";

export default function ProfileMobile() {
    const { userLogin } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = getProfileApi(getStore(ACCESS_TOKEN));
        dispatch(action);
    }, []);
    const renderOrderHistory = () => {
        return userLogin?.ordersHistory?.map((order, index) => {
            return (
                <div className="orderDetail mt-2" key={index}>
                    <h4>
                        + Orders have been placed on
                        {moment(order?.date).format("DD/MM/YYYY hh:mm:ss A")}
                    </h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>img</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order?.orderDetail.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={item.image}
                                                width={50}
                                                alt="..."
                                            />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        });
    };
    return (
        <div className="profileMobile">
            <div className="profile-info">
                <h1>Profile</h1>
                <div className="proflie-img">
                    <img src={userLogin.avatar} alt="userLogin.avatar" />
                </div>
                <h2>{userLogin.name}</h2>
            </div>
            <div className="profile-general">
                <h3>Order history</h3>
                {renderOrderHistory()}
            </div>
        </div>
    );
}
