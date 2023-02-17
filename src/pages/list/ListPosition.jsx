import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

const positionColumns = [
    { field: 'id', headerName: 'ID', width: 100,pinnable: true },
    { field: 'name', headerName: 'NOME DO CARGO', width: 230},
    { field: "employee_id", headerName:"TOTAL FUNCIONARIO", width: 230 },

]

const ListPosition = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`${listPath}`)
            console.log(listPath)
            setUserRows(response.data)

        }
        fetchData()
      
    }, [listPath])

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable listName={listName} listPath={listPath} columns={positionColumns} userRows={userRows} setUserRows={setUserRows} />
            </div>
        </div>
    )
}

export default ListPosition