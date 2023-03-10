import axios from "../api/axios";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { logoNavbar } from "../Navbar";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const setAuth = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    userRef.current.focus();

    useEffect(() => {
        setErrMsg('');
    }, [emailOrUsername, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                "/login",
                JSON.stringify({ emailOrUsername, password }),
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response.data);
            setAuth({ emailOrUsername, password });
            setEmailOrUsername('');
            setPassword('');
            cookies.set('auth', true, {
                path: '/',
                maxAge: 86400 
            })
            window.location.href = '/';
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            localStorage.setItem('profile', false);
            errRef.current.focus();
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