import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

const employeeColumns = [
    { field: 'id', headerName: 'ID', width: 70, pinnable: true },
    { field: 'name', headerName: 'Nome', width: 150, editable: true, align:'center', headerAlign: 'center'},
    { field: "birth_date", headerName:"Data Nascimento", width: 160,  },
    { field: "gender", headerName: "Genero", width: 130, align:'center', headerAlign: 'center' },
    { field: "address", headerName: "Endereco", width: 130, align:'center', headerAlign: 'center' },
    { field: "contact", headerName: "Contacto", width: 130, align:'center', headerAlign: 'center' },
    { field: "email",  headerName: "Email", width: 100, align:'center', headerAlign: 'center' },
    { field: "nuit",  headerName: "NUIT", width: 130, align:'center', headerAlign: 'center' },
    { field: "dependents",  headerName: "Dependentes", width: 120, align:'center', headerAlign: 'center' },
    { field: "salary",  headerName: "Salario Base", width: 130, align:'center', headerAlign: 'center' },
    { field: "bonus",  headerName: "Bonus", width: 100, align:'center', headerAlign: 'center' },
    { field: "bank_name",headerName: "Nome do Banco", width: 130, align:'center', headerAlign: 'center' },
    { field: "bank_account",headerName: "Numero da Conta", width: 130, align:'center', headerAlign: 'center' },
    { field: "nib",headerName: "NIB", width: 50, align:'center', headerAlign: 'center' ,},
    { field: "social_security",headerName: "Numero Seg. Social", width: 130, align:'center', headerAlign: 'center'},
    { field: "start_date",headerName: "Data Inicio", width: 100,align:'center', headerAlign: 'center' },
    { field: "end_date",headerName: "Data Fim", width: 100, align:'center', headerAlign: 'center' },
    { field: "employee_status",headerName: "Estado", width: 70, align:'center', headerAlign: 'center' }
    

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