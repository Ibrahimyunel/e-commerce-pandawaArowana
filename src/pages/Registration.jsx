import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../api/axios";
import { logoNavbar } from "../Navbar";

const swalConfig = {
    icon: 'warning',
    title: 'Oops...',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
}

function changeSwalConfig(swalConfig, icon, title) {
    return { ...swalConfig, icon: icon, title: title }
}

const Registration = () => {
    const [username, setUsername] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [matchPass, setMatchPass] = useState('');

    const formRef = useRef();
    const usernameRef = useRef();
    const confirmPassRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setMatchPass(password === confirmPass);
    }, [password, confirmPass]);

    const valList = [username, whatsapp, email, password];

    const errorValidation = (e) => {
        e.preventDefault();
        const targetInput = [].slice.call(formRef.current.children)
        targetInput.shift();
        const emptyData = [];
        const emptyIdx = [];

        for (let i = 0; i < valList.length; i++) {
            if (valList[i] === "") {
                emptyData.push(targetInput[i].placeholder);
                emptyIdx.push(valList.indexOf(valList[i]));
            }
        }

        if (emptyData.length > 0) {
            swalConfig.text = "Kamu belum isi " + emptyData;
            Swal.fire(swalConfig)
                .then(() => {
                    setTimeout(() => targetInput[emptyIdx[0]].focus(), 290);
                });
            return false;
        }
        else if (!email.includes('@')) {
            swalConfig.text = "Email kamu tidak valid";
            Swal.fire(swalConfig)
                .then(() => {
                    setTimeout(() => targetInput[2].focus(), 290);
                });
            return false;
        }
        else if (!matchPass) {
            swalConfig.text = "Konfirmasi password kamu tidak valid";
            Swal.fire(swalConfig)
                .then(() => {
                    setTimeout(() => confirmPassRef.current.focus(), 290);
                });
            return false;
        }
        else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        if (errorValidation(e)) {
            axios.post("/register",
                { username, whatsapp, email, password }
            )
                .then((res) => {
                    console.log(res.data);
                    const successAlert = changeSwalConfig(swalConfig, 'success', 'Yeayy...');
                    successAlert.text = 'Kamu berhasil terdaftar di pandawa family!';

                    Swal.fire(successAlert)
                        .then(() => {
                            window.location.href = '/login';
                        });
                })
                .catch((err) => {
                    console.log(err);
                    const notUniqueVal = Object.values(err.response.data.err.keyValue) + "";
                    const notUniqueIdx = valList.indexOf(notUniqueVal) + 1;
                    const signName = formRef.current.children[notUniqueIdx];
                    console.log(notUniqueIdx);
                    swalConfig.text = `Registrasi gagal, ${signName.placeholder} ${notUniqueVal} sudah terdaftar. Silahkan coba dengan ${signName.placeholder} yang berbeda ya...`;
                    Swal.fire(swalConfig)
                        .then(() => {
                            setTimeout(() => signName.focus(), 290);
                        });
                });
        }
    }

    return (
        <div className="container-full">
            <div className="row mx-lg-0 mx-2 wrapper-content">
                <div className="col-lg d-none d-lg-block head-aro">
                    <img src={process.env.PUBLIC_URL + "/images/headArowana.png"} alt="" />
                </div>
                <form className="form-control col-lg p-3 glass" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
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
                        placeholder="Konfirmasi Password"
                        ref={confirmPassRef}
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