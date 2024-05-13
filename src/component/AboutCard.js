import "./AboutCard.css"
// import About5 from "../asset/about5.jpg"

const AboutCard = ({img, title, description}) => {
    return(
        <div className="AboutCard">
                <div className="about about3">                   
                    <div className="About_logo">
                        <div className="logo_img">
                            <img className="about-img-frame" src={img} alt={title} />
                        </div>
                        <h4 className="about_logo_title">{title}</h4>
                    </div>
                    <div className="About_description">
                        <p>{description}</p>
                    </div>
                </div>
        </div>            
        
    )
}
export default AboutCard;