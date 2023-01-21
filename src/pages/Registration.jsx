import axios from "axios";
import React, { useState } from "react";
import "../index.css"
import headArowana2 from '../images/headArowana2.png';
import bodyArowana from '../images/bodyArowana.png';
import { Link } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState();
    const [handphone, setHandphone] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, handphone, address, email, password, ConfirmPassword);
        let formData = new FormData();
        formData.append('name', name);
        formData.append('handphone', handphone);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('ConfirmPassword', ConfirmPassword);
        const url = "http://localhost:8080/theiam-backend/pandawa-arowana/index.php";
        axios.post(url, formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg text-end align-self-end pb-4 d-none d-lg-block">
                    <img src={headArowana2} alt="" />
                </div>
                <div className="col-lg px-lg-0 px-2">
                    <form className="form-control sticky-top glass">
                        <div className="p-3">
                            <h2 className="text-light text-center mb-4">Registrasi</h2>
                            <input type="text" className="form-control mb-3" name="name" id="name" placeholder="Nama" onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="handphone" id="handphone" placeholder="Handphone" onChange={(e) => { setHandphone(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="address" id="address" placeholder="Alamat" onChange={(e) => { setAddress(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="email" id="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="password" id="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="text" className="form-control mb-3" name="confirmPassword" id="confirmPassword" placeholder="Ulangi Password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                            <div className="col-6 d-grid mx-auto mb-3">
                                <button type="submit" className="btn" name="submit">Daftar</button>
                            </div>
                            <p className="text-center text-light">Sudah punya akun? <Link className="text-dark" to="/Login">Login disini!</Link></p>
                        </div>
                    </form>
                </div>
                <div className="col-lg align-self-center d-none d-lg-block">
                    <img src={bodyArowana} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Registration;