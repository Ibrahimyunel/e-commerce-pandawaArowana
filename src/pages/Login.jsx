import axios from "axios";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { logoNavbar } from "../Navbar";
import "../index.css";

function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            localStorage.setItem('profile', true);
            navigate("/");

            // const response = await axios.post("http//localhost:3500/auth",
            //     JSON.stringify({ username, password }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(JSON.stringify(response.data));
            // const accessToken = response.data.accessToken;
            // const roles = response.data.roles;
            // setAuth({ username, password, roles, accessToken });
            // setUsername('');
            // setPassword('');
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
            errRef.current.focus();
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username, password);
    //     let formData = new FormData();
    //     formData.append('username', username);
    //     formData.append('password', password);
    //     const url = "http://localhost:8080/theiam-backend/pandawa-arowana/index.php";
    //     axios.post(url, formData)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }

    return (
        <div className="container-full">
            <div className="row wrapper-sign">
                <div className="col-lg d-none d-lg-block head-aro">
                    <img src={process.env.PUBLIC_URL + "/images/headArowana.png"} alt="" />
                </div>
                <div className="col-lg px-lg-0 p-3">
                    <form className="form-control sticky-top glass" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                        <div className="p-2">
                            <h2 className="text-light text-center mb-4">Login</h2>
                            <input
                                type="text"
                                className="form-control mb-3"
                                name="username"
                                id="username"
                                placeholder="username"
                                autoComplete="off"
                                ref={userRef}
                                onChange={(e) => { setUsername(e.target.value) }}
                                value={username}
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
                            <p className="text-center text-light">Belum punya akun? <Link className="text-dark" to="/registration">Daftar disini!</Link></p>
                            <div className="logo-center">{logoNavbar}</div>
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

export default Login;