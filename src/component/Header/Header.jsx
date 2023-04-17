import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const { userLogin } = useSelector((state) => state.userReducer);
    const { gioHang } = useSelector((state) => state.cartReducer);
    const renderNavLink = () => {
        if (userLogin) {
            return (
                <NavLink className="nav--link" to="/profile">
                    {userLogin.email}
                </NavLink>
            );
        }
        return <NavLink to="/login">Login</NavLink>;
    };
    const tongSoLuong = () => {
        console.log({ gioHang });
        return gioHang?.reduce((tsl, sp, index) => {
            return (tsl += sp.quantity);
        }, 0);
    };

    return (
        <header>
            <div className="container">
                <div className="header_top row">
                    <NavLink to="/" className="logo col-6">
                        <img
                            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
                            alt="cybersoft.edu.vn"
                        />
                    </NavLink>
                    <div className="header_right col-6">
                        <div className="content ">
                            <NavLink to="/search">
                                <i className="fa fa-search"></i>
                                Search
                            </NavLink>
                            <NavLink className="shop" to="/carts">
                                <i className="fa fa-cart-plus"></i>
                                <span>({tongSoLuong()})</span>
                            </NavLink>
                            {renderNavLink()}
                            <NavLink to="register">Register</NavLink>
                        </div>
                        <div className="dropdown-bar-mobile">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown button
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
