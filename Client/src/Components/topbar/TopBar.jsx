import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar(){
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems"> <Link to="/" className="link">HOME </Link></li>
                    <li className="topListItems"> <Link to="/about" className="link">ABOUT </Link></li>
                    <li className="topListItems"> <Link to="" className="link"> CONTACT </Link></li>
                    {user && <li className="topListItems"> <Link to="/write" className="link"> WRITE </Link></li>}
                    <li className="topListItems"> <Link to="/" className="link"> 
                    {user && "LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {user && <img className = "topImage" src="https://thispersondoesnotexist.com/image" alt="" />}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}