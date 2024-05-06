import "./Projects.css"
import ProjectCard from "../component/ProjectCard"



const About = () => {
    return(
        <div className="Projects">
            <div class="container">
                <div class="item Projects-title"><h1>projects</h1></div>
                
                <div class="item Projects-filter">
                    <div class="item projectbtn1">web/mobile</div>
                    <div class="item projectbtn2">toy projects</div>
                </div>

                <div className="grid-content"> 
                    <div class="item item5">

                        {/* <div class="item item6">
                            <div class="item6-img">img</div>
                            <div class="item6-desc">
                                description: making what site that does this thing.<br></br>
                                <div className="techstack_container">
                                    tech stack:  
                                    <p className="techstack_btn"/>
                                    <p className="techstack_btn"/>
                                    <p className="techstack_btn"/>
                                    <p className="techstack_btn"/>
                                </div>                       
                            </div>
                        </div> */}
                        <ProjectCard 
                            // img={firstimg}
                            desc={"This app is made to operate whatever function."}
                        />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        {/* <div class="item item7"></div>
                        <div class="item item8">  </div>
                        <div class="item item9"></div>
                        <div class="item item10"></div>
                        <div class="item item11"></div> */}
                    </div>
                </div>
                
                

                </div>
        </div>
    )
}

export default About;