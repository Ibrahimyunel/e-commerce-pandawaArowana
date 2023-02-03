import axios from "axios";
import React, { useState } from "react";
import "../index.css"
import { Link } from "react-router-dom";
import { LogoNavbar } from "../Navbar";

const Registration = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const url = "http://localhost:8080/theiam-backend/pandawa-arowana/index.php";
        axios.post(url, formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="container-full">
            <div className="row wrapper-sign">
                <div className="col-lg d-none d-lg-block head-aro">
                    <img src={process.env.PUBLIC_URL + "/images/headArowana.png"} alt="" />
                </div>
                <div className="col-lg px-lg-0 p-3">
                    <form className="form-control sticky-top glass">
                        <div className="p-2">
                            <h2 className="text-light text-center mb-4">Login</h2>
                            <input type="text" className="form-control mb-3" name="email" id="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="password" id="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <div className="col-6 d-grid mx-auto mb-3">
                                <button type="submit" className="btn" name="submit">Login</button>
                            </div>
                            <p className="text-center text-light">Belum punya akun? <Link className="text-dark" to="/registration">Daftar disini!</Link></p>
                            <div className="logo-center">{LogoNavbar}</div>
                        </div>
                    </form>
                </div>
                <div className="col-lg align-self-center d-none d-lg-block">
                    <img src={process.env.PUBLIC_URL + "/images/bodyArowana.png"} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Registration;