import React, { useState, useEffect, useRef } from "react";
import axios from "../reusable/axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const images = [
    { id: 1, src: '/images/logopandawaarowanaT.png', title: 'foo', alt: 'bar' },
    { id: 2, src: '/images/logopandawaarowanaT.png', title: 'foo', alt: 'bar' },
    { id: 3, src: '/images/logopandawaarowanaT.png', title: 'foo', alt: 'bar' },
    { id: 4, src: '/images/logopandawaarowanaT.png', title: 'foo', alt: 'bar' }
];

const Home = () => {
    const [mainVideo, setMainVideo] = useState(false);
    const [iamgeUpload, setImageUpload] = useState('');

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
            const res = await axios.post('/image/latest');
            console.log(res.data);
            setImageUpload([res.data]);
        } catch(err) {

        }
    }

    const iamgeUploadList = iamgeUpload.map(({ id, src, title, alt }) =>
        <img className="img-fluid" key={id} src={process.env.PUBLIC_URL + src} title={title} alt={alt} />
    );

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
                        {iamgeUploadList}
                    </div>
                    <div className="col-md-6">
                        {iamgeUploadList}
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