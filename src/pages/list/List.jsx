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

const payrollColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'NOME', width: 100},
    { field: "dependents", headerName:"DEPENDENTES", width: 120 },
    { field: "salary_base", headerName: "SALARIO BRUTO", width: 130},
    { field: "salary_liquid",headerName: "SALARIO LIQUIDO", width: 150},
    { field: "positionName",headerName: "CARGO", width: 100},
    { field: "departamentsName",headerName: "DEPARTAMENTO", width: 130},
    { field: "month",headerName: "MES", width: 50},
    { field: "year",headerName: "ANO", width: 70}
]

const List = ({ listName, listPath }) => {
    const [userRows, setUserRows] = useState([]);
    useEffect(() => {
        async function fetchData() {
            if(listPath === "payrolls"){
                const response = await api.post(`${listPath}`, {month: 2, year: 2024})
             console.log(listPath)
             console.log(response.data)
             console.log(response.data.data)
            setUserRows(response.data)
            return
            }

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
                {/* {console.log(userRows)} */}
                {listPath === "payrolls"?  <Datatable listName={listName} listPath={listPath} 
                userColumns={payrollColumns} userRows={userRows} setUserRows={setUserRows}/>  : 
                <Datatable listName={listName} listPath={listPath} userColumns={userColumns} userRows={userRows} setUserRows={setUserRows} />
                }
                {/* <Datatable listName={listName} listPath={listPath} userColumns={userColumns} userRows={userRows} setUserRows={setUserRows} /> */}
            </div>
        </div>
    )
}

export default List