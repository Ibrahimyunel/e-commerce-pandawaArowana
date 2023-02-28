import React from "react";
import { Link } from "react-router-dom";

export const AuthNavbar = () => {
    function handleLogout() {
        localStorage.setItem('profile', false);
        window.location.reload();
    }

    return (
        <>
            <li><Link className="dropdown-item" to="/Registration">It's me</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Keluar</Link></li>
        </>
    )
}