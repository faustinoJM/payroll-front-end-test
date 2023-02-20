import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./profile.scss"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";

const Profile = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="setting">
            <Sidebar />
            <div className="settingContainer">
                <Navbar />
                <div className="settingDiv">
                    Perfil
                    <DatePicker className="datas" selected={startDate} onChange={(date) => setStartDate(date)}/>

                </div>
            </div>
        </div>
    )
}

export default Profile;