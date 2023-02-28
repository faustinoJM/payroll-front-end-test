import { mock } from "../../assets/mockData";

const PrintTable = ({componentRef, single}) => {
        const data = mock

return (
    <div style={{display: "none"}}>
        <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
            <h1 className="text-center my-3 border py-2">
                Employee data
            </h1>
            <table className="w-75 mx-auto" bordered>
                <thead>
                    <tr>
                        <th>Name.</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((mock, i) =>  */}
                        <tr >
                            {/* <td>{i+1}</td> */}
                            <td>{single.absences}</td>
                            <td>{single.irps}</td>
                            <td>{single.inss}</td>
                        </tr>
                        
                    {/* )} */}
                </tbody>
            </table>
            <br/><br/> <br/>
            
            <div style={{borderBottom: "2px solid red", width: "100px", margin: "0 auto"}}></div>
            <h1>Assinatura</h1>

        </div>
        {/* <button onClick={handlePrint}>Imprimir</button> */}
    </div>
    
    )
}


export default PrintTable
