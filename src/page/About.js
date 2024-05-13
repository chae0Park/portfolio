import "./About.css";
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import AboutCard from '../component/AboutCard.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ABOUT_IMG } from "../data.js";


const About = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6; // Total number of <AboutCard> components

    const settings = {
        dots: true,
        infinite: false,  // Set to false if you want the carousel to stop at the last slide
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        beforeChange: (current, next) => setCurrentSlide(next),
        adaptiveHeight: true
    };

    const handleWheel = (event) => {
        if (sliderRef.current) {
            event.preventDefault();  // Prevents scrolling the page while interacting with the slider
            if (event.deltaY > 0) {
                if (currentSlide < totalSlides - settings.slidesToShow) {
                    sliderRef.current.slickNext();
                }
            } else {
                if (currentSlide > 0) {
                    sliderRef.current.slickPrev();
                }
            }
        }
    };

    return (
        <div className="About">
            <div className="about-title">
                <h1>About</h1>
                <h3>skills and tools</h3>
            </div>

            <div className="about-slider">
                <div className="about-img-container" onWheel={handleWheel}>
                    <Slider ref={sliderRef} {...settings}>
                        <AboutCard {...ABOUT_IMG[0]}/>
                        <AboutCard {...ABOUT_IMG[1]}/>
                        <AboutCard {...ABOUT_IMG[2]}/>
                        <AboutCard {...ABOUT_IMG[3]}/>
                        <AboutCard {...ABOUT_IMG[4]}/>
                        <AboutCard {...ABOUT_IMG[5]}/>
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default About;
