import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="nav-home-container">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="logo">로고</div>
            </div>
        </div>
    )
}
export default Header;
