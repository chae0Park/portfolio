import "./About.css";
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import AboutCard from '../component/AboutCard.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htmlcss from "../asset/htmlcss.png";
import js from "../asset/js.png";
import java from "../asset/java.png";
import sql from "../asset/sql-serve.png";
import react from "../asset/reactlogo.png";
import github from "../asset/github-mark.svg"

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
                        <AboutCard
                            img={htmlcss}
                            title={"HTML/CSS "}
                            description={"Structuring web content and styling it, enabling the creation of visually appealing and well-organized websites."}
                        />
                        <AboutCard
                            img={js}
                            title={"Javascript "}
                            description={"Creating dynamic and interactive web experiences, enhancing user interfaces with real-time content updates and interactive features."}
                        /> 
                        <AboutCard
                            img={java}
                            title={"Java "}
                            description={"Developing robust and scalable server-side applications, leveraging its object-oriented capabilities to build reliable and maintainable software systems."}
                        />
                        <AboutCard
                            img={sql}
                            title={"SQL "}
                            description={"Managing and manipulating relational databases, efficiently querying, updating, and organizing data to support robust back-end foundations for applications."}
                        /> 
                        <AboutCard
                            img={react}
                            title={"React"}
                            description={"Skilled in developing reusable components, managing state, and optimizing application performance to enhance user experiences on web platforms"}
                        />
                        <AboutCard
                            img={github}
                            title={"Github"}
                            description={"Proficient in using Git for branching, merging, and managing code repositories to streamline and enhance project workflows"}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default About;
