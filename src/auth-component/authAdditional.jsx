import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const AuthNavbar = () => {
    function handleLogout() {
        cookies.remove('auth');
        window.location.href = '/';
    }

    return (
        <>
            <li><Link className="dropdown-item" to="/Registration">It's me</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Keluar</Link></li>
        </>
    )
}