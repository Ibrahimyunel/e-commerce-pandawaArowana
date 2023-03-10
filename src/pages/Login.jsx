import axios from "../reusable/axios";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { logoNavbar } from "../Navbar";
import Swal from "sweetalert2";
import { swalConfig } from "../reusable/handleSwal";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    const setAuth = useContext(AuthContext);
    const userRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.get('auth') !== undefined) navigate('/');
    }, []);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/login",
                { emailOrUsername, password }
            );
            // setAuth({ emailOrUsername, password });
            setEmailOrUsername('');
            setPassword('');
            cookies.set('auth', response.data.token, {
                path: '/',
                maxAge: 86400
            })
            navigate('/');
        } catch (err) {
            console.log(err);
            if (!err.response) {
                swalConfig.text = "Maaf login gagal, coba lagi nanti atau hubungi admin pada tombol chat";
            } else if (err.response.status === 404 || err.response.status === 400) {
                swalConfig.text = `Maaf login gagal, ${err.response.data.message}`;
            } else {
                swalConfig.text = "Maaf login gagal";
            }
            cookies.remove('auth');
            Swal.fire(swalConfig)
                .then(() => {
                    if (err.response !== undefined) {
                        if (err.response.status === 400) setTimeout(() => passwordRef.current.focus(), 290);
                    } else {
                        setTimeout(() => userRef.current.focus(), 290);
                    }
                });
        }
    }

    return (
        <div className="container-full">
            <div className="row mx-lg-0 mx-2 wrapper-content">
                <div className="col-lg d-none d-lg-block head-aro">
                    <img src={process.env.PUBLIC_URL + "/images/headArowana.png"} alt="" />
                </div>
                <form className="form-control col-lg p-3 glass" autoComplete="off" onSubmit={handleSubmit}>
                    <h2 className="text-light text-center mb-4">Login</h2>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="emailOrUsername"
                        id="emailOrUsername"
                        placeholder="Email / Username"
                        autoComplete="off"
                        ref={userRef}
                        onChange={(e) => { setEmailOrUsername(e.target.value) }}
                        value={emailOrUsername}
                        required
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        name="password"
                        id="password"
                        placeholder="Password"
                        ref={passwordRef}
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        required
                    />
                    <div className="col-6 d-grid mx-auto mb-3">
                        <button type="submit" className="btn" name="submit">Login</button>
                    </div>
                    <p className="text-center text-light">
                        Belum punya akun? <Link className="text-dark" to="/registration">Daftar disini!</Link>
                    </p>
                    <div className="logo-center">{logoNavbar}</div>
                </form>
                <div className="col-lg align-self-center d-none d-lg-block">
                    <img src={process.env.PUBLIC_URL + "/images/bodyArowana.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;