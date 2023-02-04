import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.scss"

const Setting = () => {
    return (
        <div className="setting">
            <Sidebar />
            <div className="settingContainer">
                <Navbar />
                <div className="settingDiv">
                    Settings
                </div>
            </div>
        </div>
    )
}

export default Setting;