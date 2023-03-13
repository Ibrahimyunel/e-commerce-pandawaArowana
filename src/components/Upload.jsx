import React, { useState } from "react";
import axios from "../reusable/axios";
import { readImageValidation } from "../reusable/validation";
import moment from "moment-timezone";

const Upload = () => {
    const [imageUpload, setImageUpload] = useState('');
    const [caption, setCaption] = useState('');
    const [base64, setBase64] = useState('');

    const currentDate = moment().format('DD/MM/YYYY');
    const currentTime = moment().format('LTS');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageUpload) {
            try {
                const name = imageUpload.name.replace(/ /g, '_');
                const res = await axios.post(
                    '/upload',
                    { name, currentDate, currentTime, caption, base64 },
                    { header: { 'Content-Type': 'application/json' } }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="upload m-3">
            <form className="form-control col-lg p-3 glass" autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="uploadInput">Upload Image Here</label>
                <input
                    type="file"
                    className="form-control mb-3"
                    id="uploadInput"
                    accept="image/*"
                    onChange={(e) => { setImageUpload(readImageValidation(e, setBase64)) }}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="caption"
                    id="caption"
                    placeholder="Caption"
                    autoComplete="off"
                    onChange={(e) => { setCaption(e.target.value) }}
                    value={caption}
                    required
                />
                <div className="col-6 d-grid mx-auto mb-3">
                    <button type="submit" className="btn" name="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default Upload;