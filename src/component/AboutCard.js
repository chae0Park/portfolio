import "./AboutCard.css"
// import About5 from "../asset/about5.jpg"

const AboutCard = ({title, description}) => {
    return(
        <div className="AboutCard">
                <div className="about about3">
                    {/* <img 로고부분 /> */}
                    <div className="About_logo">로고</div>
                    <div className="About_description">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
        </div>            
        
    )
}
export default AboutCard;