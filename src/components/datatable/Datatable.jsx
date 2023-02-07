import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom"
import { useState } from "react";


const Datatable = ({ listName, listPath, userColumns, userRows, setUserRows }) => {
//   const [data, setData] = useState(userRows);
//   console.log(data)

  const handleDelete = (id) => {
    setUserRows(userRows.filter(item => item.id !== id))
  } 

    const actionColumn = [
        { 
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/${listPath}/${params.row.id}`} style={{textDecoration: "none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to="" style={{textDecoration: "none"}}>
                            <div className="editButton">Edit</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New {listName}
                <Link to={`/${listPath}/new`} className="link">
                    Add New
                </Link>
            </div>

            <DataGrid
            sx={{
                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                   outline: "none !important",
                },
             }}
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection                             
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