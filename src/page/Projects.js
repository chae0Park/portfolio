import "./Projects.css"
import Pj1 from "../asset/pj1.jpg";
import Pj2 from "../asset/pj2.jpg";
import Pj3 from "../asset/pj3.jpg";
import Pj4 from "../asset/pj4.jpg";
import Pj5 from "../asset/pj5.jpg";
import Pj6 from "../asset/pj6.jpg";

const About = () => {
    return(
        <div className="Projects">
            <div class="container">
                <div class="item Projects-title">projects</div>
                
                <div class="item Projects-main">
                    <div class="item projectbtn1">web/mobile</div>
                    <div class="item projectbtn2">toy projects</div>
                </div>

                <div className="grid-content"> 
                    <div class="item item5">
                        <div class="item item6">
                            <img className="pj-img"
                            src={Pj1} alt={Pj1} />
                        </div>
                        <div class="item item7">
                            <img className="pj-img"
                            src={Pj2} alt={Pj2} />
                        </div>
                        <div class="item item8">
                            <img className="pj-img"
                            src={Pj3} alt={Pj3} />
                        </div>
                        <div class="item item9">
                            <img className="pj-img"
                            src={Pj4} alt={Pj4} />
                        </div>
                        <div class="item item10">
                            <img className="pj-img"
                            src={Pj5} alt={Pj5} />
                        </div>
                        <div class="item item11">
                            <img className="pj-img"
                            src={Pj6} alt={Pj6} />
                        </div>
                    </div>
                </div>
                
                

                </div>
        </div>
    )
}

export default About;