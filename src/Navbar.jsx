import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';

const Navbar = () => {
    const [navClass, setNavClass] = useState(false);
    
    function navScroll() {
        console.log(window.scrollY);
        if(window.scrollY >= 45) {
            setNavClass(true);
        } else {
            setNavClass(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navScroll);
    })

    return (
        <nav className= {navClass ? "container-nav sticky-top nav-scroll" : "container-nav sticky-top"}>
            <div className="container">
                <ul className=" navbar-list fw-bold" style={{ margin: 0 }}>
                    <li>
                        <Link className="link1" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Registration">Daftar</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;