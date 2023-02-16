import axios from "../api/axios";
import React, { useState, useEffect, useRef } from "react";
import "../index.css"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { logoNavbar } from "../Navbar";

const Registration = () => {
    const [username, setUsername] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [matchPass, setMatchPass] = useState('');

    const formRef = useRef();
    const usernameRef = useRef();





    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post("/register",
    //         { username, whatsapp, email, password }
    //     )
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }

    const errorValidation = (e) => {
        e.preventDefault();
        const target = [].slice.call(formRef.current.children);
        const valList = [username, whatsapp, email, password];
        const emptyData = [];
        const emptyIdx = [];
        for (let i = 0; i < valList.length; i++) {
            if (valList[i] === "") {
                emptyData.push(target[i + 1].placeholder);
                emptyIdx.push(valList.indexOf(valList[i]));
            }
        }
        if (emptyData.length > 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "Kamu belum isi " + emptyData,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((res) => {
                if (res.isConfirmed) {
                    setTimeout(() => target[emptyIdx[0] + 1].focus(), 290);
                }
            });
        }
    }

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setMatchPass(password === confirmPass);
    }, [password, confirmPass]);

    return (
        <div className="container-full">
            <div className="row mx-lg-0 mx-2 wrapper-content">
                <div className="col-lg d-none d-lg-block head-aro">
                    <img src={process.env.PUBLIC_URL + "/images/headArowana.png"} alt="" />
                </div>
                <form className="form-control col-lg p-3 glass" ref={formRef} onSubmit={errorValidation}>
                    <h2 className="text-light text-center mb-4">Registrasi</h2>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="username"
                        name="username"
                        placeholder="Nama"
                        ref={usernameRef}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="whatsapp"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        id="confirmPassword"
                        placeholder="Ulangi Password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn col-6 d-grid mx-auto mb-3"
                        name="submit"
                    >
                        Daftar
                    </button>

                    <p className="text-center text-light">
                        Sudah punya akun? <Link className="text-dark" to="/login">Login disini!</Link>
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

export default Registration;