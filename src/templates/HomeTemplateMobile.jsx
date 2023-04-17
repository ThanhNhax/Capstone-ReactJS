import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HomeTemplateMobile() {
    return (
        <div className="homeTemplateMobile container">
            <Outlet />
            <div className="header_mobile">
                <NavLink to="/" className="text-white">
                    <i className="fa fa-home"></i>
                    Home
                </NavLink>
                <NavLink to="/carts" className="text-white">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                </NavLink>
                <NavLink to="/profile" className="text-white">
                    <i className="fas fa-user-alt"></i>
                    Account
                </NavLink>
            </div>
        </div>
    );
}
