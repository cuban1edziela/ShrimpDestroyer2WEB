import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slider(){
    return(
    
            <AutoplaySlider
            play={true}
            cancelOnInteraction={false} 
            interval={3000}
            >
                <div data-src="https://i.ibb.co/ft4wmfR/Gameplay4.png" />
                <div data-src="https://i.ibb.co/HHmHj8Z/Gameplay1.png" />
                <div data-src="https://i.ibb.co/Qpnxgvh/Gameplay6.png" />
                <div data-src="https://i.ibb.co/k5GHYxw/Gameplay5.png" />
                <div data-src="https://i.ibb.co/ft4wmfR/Gameplay4.png" />
                <div data-src="https://i.ibb.co/8gx9Mc1/Gameplay3.png" />
                
            </AutoplaySlider>
        
    );
};