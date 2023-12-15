import React, { useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { PiSpeakerHighBold } from "react-icons/pi";

function Texttospeech() {
    useEffect(() => {
        const speakBtn = document.querySelector("#playBtn");
        const query = document.querySelector("#text");

        const playSpeech = () => {
            const textValue = query.value.trim(); // Trim whitespace from the input value

            if (textValue === '') {
                alert('Please enter text before clicking Speak.');
                return;
            }

            const speech = new SpeechSynthesisUtterance(textValue);
            speechSynthesis.speak(speech);
        }

        speakBtn.addEventListener("click", playSpeech);

        // Cleanup the event listener when the component unmounts
        return () => {
            speakBtn.removeEventListener("click", playSpeech);
        }
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

    return (
        <>
            <div className="App">
                <Navbar />
                <div className="container">
                    <h1 className='top'>Type your text, and instantly<span className="txt_clr"> transform it into spoken words.</span> Listen to your content with ease on our user-friendly platform.</h1>
                    <div className='center'>
                    <input id="text" placeholder="Input your text" />
                    <button id="playBtn" className="btn btn-dark btn-lg"><PiSpeakerHighBold className='icon' />Speak</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Texttospeech;