import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom"
import { useState } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";


const Datatable = ({ listName, listPath, columns, userRows, setUserRows }) => {
//   const [data, setData] = useState(userRows);
//   console.log(data)

  const handleDelete = (id) => {
    setUserRows(userRows.filter(item => item.id !== id))
  } 

    const actionColumn = [
        { 
            field: "action", 
            headerName: "", 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        {listPath === "payrolls" || "employees" ? 
                            <Link to={`/${listPath}/${params.row.id}`} style={{textDecoration: "none"}}>
                                <div className="viewButton">Ver</div>
                            </Link>
                            :
                            ""}
                        <Link to="" style={{textDecoration: "none"}}>
                            <div className="editButton">Editar</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Remover</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                {listName}
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
                checkboxSelection
                autoHeight        
                initialState={{
                    pinnedColumns: { left: ['id', 'name'] },
                }}                   
                />
        </div>
    )
}

export default Datatable;


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