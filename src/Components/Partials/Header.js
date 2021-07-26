import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <>
            <nav className="navbar sticky-top p-0 pt-2 bg-menu">

                <Link to="/">
                    <h3 className="ms-lg-3 ms-1 logo">GRÖNA VÄXTER</h3>
                </Link>

                <ul className="navbar navbar-links p-lg-2 p-1 list-unstyled">
                    <Link to="/products">
                        <li>SHOP |</li>
                    </Link>
                    <li className="ps-2">OM OSS |</li>
                    <li className="ps-2">VARUKORG</li>


                </ul>

            </nav>

        </>
    )
}

export default Header
