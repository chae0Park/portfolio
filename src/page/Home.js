import './Home.css';
import Header from '../component/Header';


const Home = () => {
    return(
        <div className="Home">
            <Header />
            <div className="item item2">
                <div className="Home_introduction">
                
                    <h2>What is Lorem Ipsum?</h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </div>
                <div className="Home_img">
                    {/* <img  className='home-img' src={Ivan} alt={Ivan} /> */}
                </div>
            </div>   
        </div>
    )
}
export default Home;