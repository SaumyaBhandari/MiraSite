import './settings.css'
import Sidebar from '../../Components/sidebar/Sidebar'

export default function Settings(){
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://thispersondoesnotexist.com/image" alt="" />
                        <label htmlFor="fileInput"> <i class="settingsPPIcon fa-solid fa-user"></i> </label>
                        <input type="file" id='fileInput' style={{display: 'none'}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Your name...' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='emailaddress@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Your password...' />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}