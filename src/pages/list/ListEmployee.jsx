import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

const employeeColumns = [
    { field: 'id', headerName: 'ID', width: 70, pinnable: true },
    { field: 'name', headerName: 'NOME', width: 100, editable: true},
    { field: "birth_date", headerName:"DATA NASCIMENTO", width: 160 },
    { field: "gender", headerName: "GENERO", width: 130},
    { field: "address", headerName: "ENDERECO", width: 130},
    { field: "contact", headerName: "CONTANCTO", width: 130},
    { field: "email",  headerName: "EMAIL", width: 100},
    { field: "nuit",  headerName: "NUIT", width: 130},
    { field: "dependents",  headerName: "DEPENDENTES", width: 130},
    { field: "salary",  headerName: "SALARIO BASE", width: 130},
    { field: "bonus",  headerName: "BONUS", width: 130},
    { field: "bank_name",headerName: "NOME DO BANCO", width: 50},
    { field: "bank_account",headerName: "NUMERO DA CONTA", width: 50},
    { field: "nib",headerName: "NIB", width: 50},
    { field: "social_security",headerName: "NUMERO SEG. SOCIAL", width: 50},
    { field: "start_date",headerName: "DATA INICIO", width: 150},
    { field: "end_date",headerName: "DATA FIM", width: 50},
    { field: "employee_status",headerName: "ESTADO", width: 70,}
    

]

const ListEmployee = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(listPath)
             console.log(listPath)
             console.log(response.data)
             console.log(response.data.data)
            setUserRows(response.data)

    

        }
        fetchData()
      
    }, [listPath])

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable listName={listName} listPath={listPath} columns={employeeColumns} userRows={userRows} setUserRows={setUserRows}/>
            </div>
        </div>
    )
}

export default ListEmployee