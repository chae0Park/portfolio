import "./Projects.css"
import { useState } from "react"
import ProjectCard from "../component/ProjectCard"
import { PROJECT_LSIT } from "../data.js";

//simplified project list 
// const projectList = [
//   { id: 1, category: "webMobile", name: "Web/Mobile Project 1"},
//   { id: 2, category: "webMobile", name: "Web/Mobile Project 2" },
//   { id: 3, category: "toyProjects", name: "Toy Project 1" },
//   { id: 4, category: "toyProjects", name: "Toy Project 2" },
//   { id: 5, category: "webMobile", name: "Web/Mobile Project 3" },
//   { id: 6, category: "toyProjects", name: "Toy Project 3" },
// ]

const Projects = () => {
const [tab, setTab] = useState("");

//어떤 필터로 설정되었는지 확인이 필요함 
const onChangeFilter = (category) => {
    setTab(category);
};

const filteredProjects = tab
  ? PROJECT_LSIT.filter((project) => project.category === tab)
  : PROJECT_LSIT; //show all projects if no tab is selected

// 

    return(
        <div className="Projects">
            <div class="container">
                <div class="item Projects-title"><h1>projects</h1></div>
                
                <div class="item Projects-filter">
                    <button class="item projectbtn1"
                      onClick={() => onChangeFilter("webMobile")}
                      >
                      web/mobile
                    </button>
                    <button class="item projectbtn2"
                      onClick={() => onChangeFilter("toyProjects")}
                        >
                        toy projects
                    </button>
                    <button className="item projectbtn3"
                      onClick={() => onChangeFilter("")}
                    >
                      show all 
                    </button>
                </div>

                <div className="grid-content"> 
                    <div class="item item5">
                        {filteredProjects.map((project) => (
                          <ProjectCard {...PROJECT_LSIT} />
                        ))}
                    </div>
                </div>
              </div>
        </div>
    );
};
export default Projects;


