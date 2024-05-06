import './Home.css';
import { useState,useEffect } from 'react';
import Header from '../component/Header';
import MainIMG from '../asset/한 여자 개발자가 컴퓨터 앞에 앉아 열심히 개발을 하는 모습-ai-generated-flamel-146434.png';

// introduction - highlighting effects needed 
//react typing effect custom hook 
//https://www.letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks/ 
const initialIntroductions = ["web","React FE", "Java BE"];

const Home = () => {
    //use a state hook for the current introduction, and initialise with the first element
    const [introduction, setIntroduction] = useState([...initialIntroductions]);
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            //Shift the first element to the end to cycle through the list
            setIntroduction(intro => {
                const next = intro.shift(); //remove the first item
                intro.push(next); //append it back to the end
                return [...intro];
            });
        },2000);

        //clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="Home">
            <Header />
            <div className="item item2">
                <div className="Home_introduction">
                
                    <h2>Hello! I'm Chaeyoung,<br></br>a dedicated <span className='word'>{introduction[0]}</span> developer</h2>
                    with a strong foundation in modern HTML/CSS and JavaScript, 
                    honed through self-study and an intensive full stack development bootcamp. 
                    I excel in creating responsive and efficient web applications, 
                    integrating aesthetic designs with functional backend solutions. 
                    My approach combines keen problem-solving skills with a passion 
                    for embracing emerging technologies to deliver compelling, 
                    user-centric websites.
                </div>
                <div className="Home_img">
                    <img  src={MainIMG} alt={MainIMG} />
                </div>
            </div>   
        </div>
    )
}
export default Home;