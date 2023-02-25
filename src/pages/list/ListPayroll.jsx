import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

const payrollColumns = [
    { field: 'employee_id', headerName: 'ID', width: 70, pinnable: true, headerAlign: 'center',},
    { field: 'employee_name', headerName: 'Nome', width: 100, headerAlign: 'center',},
    { field: "departament_name", headerName:"Departemento", width: 120,  align:'center', headerAlign: 'center', },
    { field: "position_name", headerName:"Cargo", width: 180,  align:'center', headerAlign: 'center', },
    { field: "salary_base", headerName: "Salario Base", width: 130, align:'center', headerAlign: 'center',},
    { field: "total_overtime", headerName: "Total Horas Extras", width: 135,  align:'center', headerAlign: 'center',},
    { field: "total_absences", headerName: "Total Desconto Faltas", width: 100, align:'center', headerAlign: 'center',},
    { field: "cash_advances",  headerName: "Adiantamentos", width: 130,  align:'center', headerAlign: 'center',},
    { field: "bonus",  headerName: "Bonus", width: 130,  align:'center', headerAlign: 'center',},
    { field: "backpay",  headerName: "Retroativos", width: 130,  align:'center', headerAlign: 'center',},
    { field: "total_income",  headerName: "Rendimento Total", width: 130,  align:'center', headerAlign: 'center',},
    { field: "irps",  headerName: "IRPS", width: 130,  align:'center', headerAlign: 'center',},
    { field: "inss",  headerName: "INSS", width: 130, align:'center', headerAlign: 'center',},
    { field: "salary_liquid",headerName: "Salario Liquido", width: 150, align:'center', headerAlign: 'center',},
    // { field: "month",headerName: "MES", width: 50},
    // { field: "year",headerName: "ANO", width: 70}
]

const ListPayroll = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`${listPath}`, {month: 2, year: 2024})
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