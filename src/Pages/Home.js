import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import Photos from "../Components/Photos";




export default function Home(){
    return(
        <div>
            
            <Navbar/>
            <Slider/>
            <Description/>
            <Photos/>
            <Download/>
            <Footer/>

        </div>
    );
};