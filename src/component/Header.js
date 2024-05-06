import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="nav-home-container">
                <ul>
                    <li><a href="#home"><h4>Home</h4></a></li>
                    <li><a href="#about"><h4>About</h4></a></li>
                    <li><a href="#projects"><h4>Projects</h4></a></li>
                    <li><a href="#contact"><h4>Contact</h4></a></li>
                </ul>
                <div className="logo">로고</div>
            </div>
        </div>
    )
}
export default Header;
