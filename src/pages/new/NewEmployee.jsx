import "./NewEmployee.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useEffect, useState, useRef, useCallback } from "react"
import { useFormik } from "formik"
import { useField } from '@unform/core';
import getValidateErrors from "../../utils/getValidationErrors"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const NewEmployee = ({ inputs, title }) => {
     const [file, setFile] = useState("")

     const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        console.log("submit")
        await new Promise((resolve) => setTimeout(resolve, 100))
        actions.resetForm()
     }

     const schema = Yup.object().shape({
        nome: Yup.string().required('Nome Obrigatorio'),
        idade: Yup.number().positive("Idade deve ser numero positivo").integer().required("Idade obrigatorio"),
        data: Yup.date().required("selecione data"),
        estadoCivil: Yup.string().required("Selecione Estado Civil"),
        
    })
    const { values, errors, handleChange, touched, isSubmitting, handleBlur, handleSubmit, setFieldValue} = useFormik({
        initialValues: {
            nome: "",
            idade: "",
            data: "",// new Date(),
            estadoCivil: "",
        },
        validationSchema: schema,
        onSubmit 
    })
    console.log(errors)
    // formik.initialValues({nome:""})
    // formik.validationSchema(schema)

    const [startDate, setStartDate] = useState(new Date());
    const handleChange2 = (date) => {
        setStartDate(date)
        handleChange()
        
    }
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="bottom">
                        <div className="right">
                            <h2>Dados Pessoias</h2>
                            <div className="form" >
                                <div className="formInput">
                                    <div className="formInput1">
                                        <label>Nome</label>
                                            <input className={`inputClass ${errors.nome && touched.nome? "input-error" : ""}`} type="text" id="nome" 
                                                    value={values.nome} onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.nome && touched.nome && <p>{errors.nome}</p>}
                                        <label>Data de Nascimento</label>
                                            <DatePicker className="DatePicker" dateFormat="dd/MM/yyyy" selected={values.data} 
                                                     id="data"
                                                    //  name="data"
                                                    onChange={date => setFieldValue('data', date)}
                                                     onBlur={handleBlur}/>
                                                     {errors.data && touched.data && <p>{errors.data}</p>}
                                        <label>Idade</label>
                                            <input className="inputClass" type="number" id="idade"
                                                 value={values.idade} onChange={handleChange} onBlur={handleBlur}/>
                                                  {errors.idade && touched.idade && <p>{errors.idade}</p>} 
                                        <label>Naturalidade</label>
                                            <input className="inputClass" type="text" />
                                        <label>Nacionalidade</label>
                                            <input className="inputClass" type="text" />
                                        <label>Numero de BI</label>
                                            <input className="inputClass" type="text" />
                                        <label for="">Estado Civil:</label>
                                            <select id="estadoCivil" name="estadoCivil" 
                                                    onChange={e => setFieldValue("estadoCivil", e.target.value)} onBlur={handleBlur}>
                                                <option value="">Selecione Estado Civil</option>
                                                <option value="solteiro">Solteiro</option>
                                                <option value="casado">Casado</option>
                                            </select>
                                            {errors.estadoCivil && touched.estadoCivil && <p>{errors.estadoCivil}</p>}
                                        <label for="">Sexo:</label>
                                            <select id="" name="">
                                                <option value="masculino">Masculino</option>
                                                <option value="femenino">Femenino</option>
                                            </select>                                         
                                    </div>
                                    <div className="formInput2">
                                    <label>Residencia</label>
                                            <input className="inputClass" type="text" />
                                        <label>Contacto</label>
                                            <input className="inputClass" type="number" placeholder="contacto1" />
                                            <input className="inputClass" type="number"  placeholder="contacto2"/> 
                                        <label>Email</label>
                                            <input className="inputClass" type="text" />
                                        <label>NUIT</label>
                                            <input className="inputClass" type="number" />
                                        <label>Numero de Dependentes</label>
                                            <input className="inputClass" type="number" />
                                    </div>
                                    <div className="formInput3">
                                        <img 
                                        src={
                                            file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                            } 
                                        alt="" />
                                        <label htmlFor="file">
                                            Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                        </label>
                                        <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="bottomForm1">
                        <div className="bottomForm11">
                            <h2>Dados da Empresa</h2>
                            <div className="form" >
                                <div className="formInput1">
                                    <label>Departamento</label>
                                        <select id="" name="">
                                            <option value="">Contabilidade</option>
                                            <option value="">RH</option>
                                        </select>
                                    <label>Cargo</label>
                                        <select id="" name="">
                                            <option value="">Contabilista</option>
                                            <option value="">Rh</option>
                                        </select>                                    
                                    <label>Data de inicio</label>
                                        <DatePicker className="DatePicker" dateFormat="dd/MM/yyyy" selected={startDate} 
                                                onChange={(date) => setStartDate(date)}/>
                                    <label>Data do fim</label>
                                        <DatePicker className="DatePicker" dateFormat="dd/MM/yyyy" selected={startDate} 
                                                onChange={(date) => setStartDate(date)}/>                                    
                                    <label>Estado</label>
                                        <select id="" name="">
                                            <option value="">Ativo</option>
                                            <option value="">Inactivo</option>
                                        </select>  
                                </div>
                                <div className="formInput2">
                                    <label>Salario Base</label>
                                        <input className="inputClass" type="number" />   
                                    <label>Subsidio</label>
                                        <input className="inputClass" type="number" defaultValue={0}/>
                                </div>                            
                            </div>
                        </div>
                        <div className="bottomForm12">
                            <h2>Dados Financeiro</h2>
                            <div className="divForm12" >
                                <label>Nome do Banco</label>
                                    <input className="inputClass" type="text" />   
                                <label>Numero da Conta Bancaria</label>
                                    <input className="inputClass" type="number" />
                                <label>NIB</label>
                                    <input className="inputClass" type="text" />
                                <label>Numero de Seg. Social</label>   
                                <input className="inputClass" type="text" />                           
                            </div>
                        </div>
                    </div>
                    <div className="bottomForm2">
                        <button disabled={isSubmitting} type="submit" className="buttonClass">Cadastrar</button>
                    </div>
                </form>  
            </div>
        </div>
    )
}

export default NewEmployee


