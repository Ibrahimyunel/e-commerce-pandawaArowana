import React, { useState, useEffect, useRef } from "react";
import axios from "../reusable/axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const getUploadResponse = [];

const Home = () => {
    const [mainVideo, setMainVideo] = useState(false);
    const [uploadList, setUploadList] = useState('');

    useEffect(() => {
        const authCookie = cookies.get('auth');
        if (authCookie === undefined) {

        } else {

        }
    }, []);

    function showVideo() {
        if (!mainVideo) {
            setMainVideo(true);
        } else {
            setMainVideo(false);
        }
    }

    async function getImageUpload() {
        try {
            const res = await axios.post('/get-upload');
            res.data.getUpload.map((item) => {
                getUploadResponse.push(item)
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function processGetImageUpload() {
        await getImageUpload();
        const createImgElements = getUploadResponse.map(({ _id, name }) =>
            <img className="img-fluid" key={_id} src={"http://localhost:9000/images/upload/" + name} alt={name} />
        );
        setUploadList(createImgElements);
    }

    useEffect(() => {
        processGetImageUpload();
    }, []);

    return (
        <div className="home">
            <div className="home-main-show">
                <h1>Pandawa Arowana akan buat pengalaman belanja dan merawat arwana menjadi lebih menyenangkan</h1>
                <div className="mx-auto col-11 col-md-8">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logopandawaarowanaT.png"} alt="" />
                </div>
            </div>
            <div className="container-md">
                <div className="row mx-1 mx-md-0">
                    <div className="col-md-6">
                        {uploadList}
                    </div>
                    <div className="col-md-6">
                        {uploadList}
                    </div>
                </div>
            </div>


            <div className="text-center">
                <div className="circle-button" onClick={showVideo}></div>
                <img className={mainVideo ? "show-video" : "hide-video"} src={process.env.PUBLIC_URL + "/images/logopandawaarowanaT.png"} alt="" />
            </div>
        </div>

    )
}

export default Home;