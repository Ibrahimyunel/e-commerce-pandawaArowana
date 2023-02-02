import React, { useState, useEffect, useRef } from "react";
import '../index.css';

const images = [
    { id: 1, src: '/images/logopandawaarowanaT.png', title: 'foo', description: 'bar' },
    { id: 2, src: '/images/logopandawaarowanaT.png', title: 'foo', description: 'bar' },
    { id: 3, src: '/images/logopandawaarowanaT.png', title: 'foo', description: 'bar' },
    { id: 4, src: '/images/logopandawaarowanaT.png', title: 'foo', description: 'bar' }
];

const Home = () => {
    const [mainVideo, setMainVideo] = useState(false);

    function showVideo() {
        if (!mainVideo) {
            setMainVideo(true);
        } else {
            setMainVideo(false);
        }
    }

    const imgList = images.map(({ id, src, title, description }) =>
        <img className="img-fluid" key={id} src={process.env.PUBLIC_URL + src} title={title} alt={description} />
    );

    return (
        <div>
            <div className="main-show">
                <div className="main-text">
                    <h1>Pandawa Arowana akan buat pengalaman belanja dan merawat arwana menjadi lebih menyenangkan</h1>
                </div>
                <div className="mx-auto col-11 col-md-8">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logopandawaarowanaT.png"} alt="" />
                </div>
            </div>
            <div className="container-md">
                <div className="row mx-1 mx-md-0">
                    <div className="col-md-6">
                        {imgList}
                    </div>
                    <div className="col-md-6">
                        {imgList}
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