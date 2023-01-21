import React, { useState, useEffect, useRef } from "react";
import logopandawaarowanaT from '../images/logopandawaarowanaT.png';
import '../index.css';

const Home = () => {
    const [mainVideo, setMainVideo] = useState(false);
    // const focusVideo = useRef(null);
    // useEffect(() => {
    //     focusVideo.current.focus();
    // });

    function showVideo() {
        if (!mainVideo) {
            setMainVideo(true);
        } else {
            setMainVideo(false);
        }
    }



    return (
        <div>
            <div className="d-flex px-5 gap-5 main-img">
                <img className="my-5 w-50" src={logopandawaarowanaT} alt="" />
                <div className="text-center text-light align-self-center">
                    <h1 className="main-text">Pandawa Arowana akan buat pengalaman belanja dan merawat arwana menjadi lebih menyenangkan</h1>
                </div>
            </div>

            <div className="text-center">
                <p className="circle-button text-light" onClick={showVideo}>Open Video</p>
                <img className={mainVideo ? "show-video" : "hide-video"} src={logopandawaarowanaT} alt="" />
            </div>

            <div className={mainVideo ? "testtt" : "testt"}>
                <textarea name="" id="" cols="30" rows="50"></textarea>
            </div>
        </div>

    )
}

export default Home;