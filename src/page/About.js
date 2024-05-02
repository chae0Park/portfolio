import "./About.css";
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import AboutCard from '../component/AboutCard.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            </div>

            <div className="about-slider">
                <div className="about-img-container" onWheel={handleWheel}>
                    <Slider ref={sliderRef} {...settings}>
                        <AboutCard
                            title={"HTML and CSS: "}
                            description={"structuring web content and styling it, enabling the creation of visually appealing and well-organized websites."}
                        />
                        <AboutCard
                            title={"JS: "}
                            description={"creating dynamic and interactive web experiences, enhancing user interfaces with real-time content updates and interactive features."}
                        /> 
                        <AboutCard
                            title={"Java: "}
                            description={"developing robust and scalable server-side applications, leveraging its object-oriented capabilities to build reliable and maintainable software systems."}
                        />
                        <AboutCard
                            title={"SQL: "}
                            description={"managing and manipulating relational databases, efficiently querying, updating, and organizing data to support robust back-end foundations for applications."}
                        /> 
                        <AboutCard
                            title={"React"}
                            description={"react"}
                        />
                        <AboutCard
                            title={"Github"}
                            description={"github"}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default About;
