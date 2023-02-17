import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

const payrollColumns = [
    { field: 'id', headerName: 'ID', width: 70, pinnable: true },
    { field: 'name', headerName: 'NOME', width: 100},
    { field: "dependents", headerName:"DEPENDENTES", width: 120 },
    { field: "salary_base", headerName: "SALARIO BASE", width: 130},
    { field: "Overtime50", headerName: "HORAS EXTRA 50%", width: 130},
    { field: "Overtime100", headerName: "HORAS EXTRA 100%", width: 130},
    { field: "bonus", headerName: "BONUS", width: 130},
    { field: "absences",  headerName: "FALTAS", width: 100},
    { field: "cashAdvances",  headerName: "ADIANTAMENTOS", width: 130},
    { field: "totalIncome",  headerName: "RENDIMENTO TOTAL", width: 130},
    { field: "IRPS",  headerName: "IRPS", width: 130},
    { field: "INSS",  headerName: "INSS", width: 130},
    { field: "salary_liquid",headerName: "SALARIO LIQUIDO", width: 150},
    { field: "month",headerName: "MES", width: 50},
    { field: "year",headerName: "ANO", width: 70}
]

const ListPayroll = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.post(`${listPath}`, {month: 2, year: 2024})
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
                <Datatable listName={listName} listPath={listPath} columns={payrollColumns} userRows={userRows} setUserRows={setUserRows}/>
            </div>
        </div>
    )
}

export default ListPayroll