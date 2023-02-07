import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import api from "../../services/api"

const userColumns = [
    { field: 'id', headerName: 'ID', width: 230 },
    { field: 'name', headerName: 'NAME', width: 100},
    { field: "employee_id", headerName:"EMPLOYEE ID", width: 100 },
    { field: "salary", headerName: "SALARY", width: 100,},
    { field: "dependents",headerName: "DEPENDENTS", width: 100,}
      

]

const List = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get('employees')
            // console.log(response)
            setUserRows(response.data)

        }
        fetchData()
      
    }, [])

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {console.log(userRows)}
                <Datatable listName={listName} listPath={listPath} userColumns={userColumns} userRows={userRows} setUserRows={setUserRows} />
            </div>
        </div>
    )
}

export default List