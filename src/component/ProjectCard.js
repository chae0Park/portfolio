import "./ProjectCard.css";
import Techstack from "./Techstack.js";

const ProjectCard = (props) => {
    return(
        <div class="item item6">
            <div class="item6-img">
                <img className="pj-img" src={props.img} alt={props.img} />
            </div>
            <div class="item6-desc">
                {props.desc}<br></br>
                <Techstack />                     
            </div>

        </div>
    )
    
}

export default ProjectCard;