import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/564x/5e/ba/c6/5ebac6c2063b400a80ab9c10f90cc1ed.jpg" alt="" srcset="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea facilis amet culpa porro assumenda corporis id, saepe dolorum minus dolore eveniet nisi numquam adipisci esse veritatis, dolor ipsa rerum voluptates?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">MY LIFE</li>
                    <li className="sidebarListItem">MY STYLE</li>
                    <li className="sidebarListItem">MY INTERESTS</li>
                    <li className="sidebarListItem">MY THOUGHTS</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}