import "./datatableInput.scss";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useDemoData } from '@mui/x-data-grid-generator';


const DatatableInput = ({ listName, listPath, columns, userRows, setUserRows }) => {
   const [data2, setData2] = useState(userRows);
//   console.log(data)
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState("");

  const { data, loading } = useDemoData({
    dataSet: userRows,
    rowLength: 4,
    maxColumns: 6,
  });


useEffect(() => {
    async function fetchData() {
        const response = await api.get("payrolls")

        setData2(response.data)
    
        console.log(year)
        console.log(month)
    }
        fetchData()
    }, [year, month])

    const submitByYear = async (e) => {
        setYear(e)
        setUserRows(data2.filter(row => (row.year === +e) && (row.month === month)))
        // console.log(data.filter(row => row.year === +e))
        
    }

    const submitByMonth = async (e) => {
        // console.log("kkk: ",e, year)
        setMonth(e)
        setUserRows(data2.filter(row => (row.month === e) && (row.year === +year)))
        // console.log(data.filter(row => row.month === month))
        
    }

    const handleDelete = async (id, router) => {
    await api.delete(`${router}/${id}`)
    setUserRows(userRows.filter(item => item.id !== id))
    } 

    const onCellEditCommit = ({ id, field, value }) => {
        api.put(`payrolls/${id}`, {[field]: value}).then(response => console.log(response))

            // console.log("id: "+id+" "+field + ": "+ value)
            // console.log("zabuza: ", {[field]: value})
        
            setUserRows((prevData) =>
            prevData.map((item) =>
              item.id === id ? { ...item, [field]: value } : item
            )
          );

            // var obj = {};
            // obj[field] = value;
            // console.log(obj)
      };

    const actionColumn = [
        { 
            field: "action", 
            headerName: "", 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        {(listPath === "payrolls") || (listPath === "employees") ? 
                            <Link to={`/${listPath}/${params.row.id}`} style={{textDecoration: "none"}}>
                                <div className="viewButton">Imprimir</div>
                            </Link>
                            :
                            ""}
                        <Link to={`/${listPath}/update/${params.row.id}`} style={{textDecoration: "none"}}>
                            <div className="editButton">Editar</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id, listPath)}>Remover</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                {listName}
                {listPath === "payrolls" ? 
                <div className="anoMes">
                    <label>Ano: </label>
                        <select id="year" name="year" onChange={e => submitByYear(e.target.value)}>
                            <option value="">Selecione Ano</option>
                            <option >2020</option>
                            <option >2021</option>
                            <option >2022</option>
                            <option >2023</option>
                            <option >2024</option>
                        </select>
                    <label>Mes: </label>
                        <select id="month" name="month" onChange={e => submitByMonth(e.target.value)} >
                            <option value="">Selecione Mes</option>
                            <option >Janeiro</option>
                            <option >Fevereiro</option>
                            <option >Marco</option>
                            <option >Abril</option>
                            <option >Maio</option>
                            <option >Junho</option>
                            <option >Julho</option>
                            <option >Agosto</option>
                            <option >Setembro</option>
                            <option >Outubro</option>
                            <option >Novembro</option>
                            <option >Dezembro</option>
                        </select>
                </div> 
                    :  ""
                }
                <Link to={`/${listPath}/new`} className="link">
                    Add Novo
                </Link>
            </div>

            <DataGrid
            sx={{
                "& .MuiDataGrid-main": {
                    // remove overflow hidden overwise sticky does not work
                    overflow: "unset"
                  },
                // "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                //    outline: "none !important",
                // },
                // '.MuiDataGrid-virtualScroller': {
                //     height: '260px !important',
                //     overflowY: 'auto',
                //   },
                //   '& .MuiDataGrid-cell:first-child': {
                //     position:"sticky",
                //     left:"0",
                //     zIndex:"1",
                //     backgroundColor: "grey"
                //   },
                //   '& .MuiDataGrid-columnHeader:first-child': {
                //     position:"sticky !important",
                //     left:"0 !important",
                //     top: "0 !important",
                //     zIndex:1,
                //     backgroundColor:"grey"
                //   },
                //   '& .MuiDataGrid-columnHeader': { 
                //     "& .MuiDataGrid-row": {
                //         "&:nth-child(2n)": { backgroundColor: "red"}
                //   }
                // },
                                               
             }}
                 columnBuffer={columns.length}
                rows={userRows}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                // checkboxSelection
                onCellEditCommit={onCellEditCommit}
                autoHeight        
                initialState={{
                    pinnedColumns: { left: ['id', 'name'] },
                }}           
                components={{ Toolbar: GridToolbar }}   
                componentsProps={{ toolbar: { csvOptions: { allColumns: true } } }}
                />
                
        </div>
    )
}

export default DatatableInput;


// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
  
//   const Datatable = () => {
//       return (
//           <div className="datatable">
//               <DataGrid
//                   rows={rows}
//                   columns={columns}
//                   pageSize={5}
//                   rowsPerPageOptions={[5]}
//                   checkboxSelection
//               />
//           </div>
//       )
//   }