import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';

const Navbar = () => {
    function navScroll() {
        console.log(window.scrollY);
        const navbar = document.getElementById("container_nav");
        if (window.scrollY >= 45) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navScroll);
    });

    return (
        <nav className="container-nav" id="container_nav">
            <div className="container h-100">
                <ul className="container navbar-list fw-bold" style={{ margin: 0 }}>
                    <li>
                        <Link className="link1" to="/"><img className="logo-text" src={process.env.PUBLIC_URL + "/images/logotext.png"} alt="logo-text" /></Link>
                    </li>
                    <li>
                        <Link to="/Registration">Daftar</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li>
                        <a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Akun Saya
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/Registration">Daftar</Link></li>
                            <li><Link className="dropdown-item" to="/Pricing">Pricing</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;