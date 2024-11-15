import React, { useRef } from 'react';
import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import Photos from "../Components/Photos";

export default function Home() {
    const downloadRef = useRef(null);

    const scrollToDownload = () => {
        downloadRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Navbar onPlayNowClick={scrollToDownload} />
            <Slider />
            <Description />
            <Photos />
            <div ref={downloadRef}>
                <Download />
            </div>
            <Footer />
        </div>
    );
}
