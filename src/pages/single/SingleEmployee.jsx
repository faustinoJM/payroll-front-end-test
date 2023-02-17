import "./singleEmployee.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import api from "../../services/api"
import { useParams, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react"


const SingleEmployee = () => {
    const [data, setData] = useState({});
  
    useEffect(() => {
        async function fetch() {
            const [ , , id] = window.location.pathname.split("/")
            const response = await api.get(`employees/${id}`)
            setData(response.data)
           
        }
        fetch()
    }, [])
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">Informacao do Funcionario</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="editButton">Editar</div>
                        <div className="item">
                             <div className="details">
                                <h2 className="title">Informacao Pessoias</h2>
                                <div className="detailItem">
                                    <span className="ItemKey">Nome:</span>
                                    <span className="itemTitle" styles={{color: "red"}}>{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Email:</span>
                                    <span className="itemValue">{data.name}@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Contacto:</span>
                                    <span className="itemValue"></span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Data de Nascimento:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Numero de BI:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Estado Civil:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Sexo:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Residencia:</span>
                                    <span className="itemValue">+ {data.id} 12 14</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">NUIT:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Numero de Dependentes:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <hr />
                                <h2 className="title">Informacoes da Empresa</h2>
                                <div className="detailItem">
                                    <span className="ItemKey">Departamento:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Cargo:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Salario Base:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Bonus:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Data do inicio:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Data do fim:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Estado do funcionario:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <hr />
                                <h2 className="title">Informacoes da Financeiras</h2>
                                <div className="detailItem">
                                    <span className="ItemKey">Nome do banco:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Numero da Conta Bancaria:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">NIB:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="ItemKey">Numero Seg. Social:</span>
                                    <span className="itemValue">{data.name}</span>
                                </div>
                             </div>     
                        </div>
                    </div>
                </div>
                    
                
            </div>
        </div>        
    )
}

export default SingleEmployee
