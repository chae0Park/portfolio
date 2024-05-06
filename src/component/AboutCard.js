import "./AboutCard.css"
// import About5 from "../asset/about5.jpg"

const AboutCard = (props) => {
    return(
        <div className="AboutCard">
                <div className="about about3">                   
                    <div className="About_logo">
                        <div className="logo_img">
                            <img className="about-img-frame" src={props.img} alt={props.title} />
                        </div>
                        <h4 className="about_logo_title">{props.title}</h4>
                    </div>
                    <div className="About_description">
                        <p>{props.description}</p>
                    </div>
                </div>
        </div>            
        
    )
}
export default AboutCard;