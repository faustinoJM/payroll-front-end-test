import "./newPosition.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState, useRef, useCallback } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import "react-datepicker/dist/react-datepicker.css"


const NewPayroll = ({ inputs, title }) => {

     const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        console.log("submit")
        await new Promise((resolve) => setTimeout(resolve, 100))
        actions.resetForm()
     }

     const schema = Yup.object().shape({
        year: Yup.number().positive().min(2000).required('Ano Obrigatorio'),
        mouth: Yup.string().required("Mes obrigatorio"),

    })
    const { values, errors, handleChange, touched, isSubmitting, setFieldValue, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            year: "",
            mouth: "",
        },
        validationSchema: schema,
        onSubmit 
    })
    console.log(errors)
  
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
                        <div className="form" >
                            <h2>Nova Folha de Salario</h2>
                            <div className="formInput1">
                                <label>Ano:</label>
                                    <input className="inputClass" type="number" id="year" 
                                            value={values.year} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.year && touched.year && <p>{errors.year}</p>}
                                <label>Mes</label>
                                    <select id="mouth" name="mouth" 
                                            onChange={e => setFieldValue("mouth", e.target.value)} onBlur={handleBlur}>
                                        <option value="">Selecione Mes</option>
                                        <option value="janeiro">Janeiro</option>
                                        <option value="fevereiro">Fevereiro</option>
                                        <option value="marco">Marco</option>
                                        <option value="abril">Abril</option>
                                        <option value="maio">Maio</option>
                                        <option value="junho">Junho</option>
                                        <option value="julho">Julho</option>
                                        <option value="agosto">Agosto</option>
                                        <option value="setembro">Setembro</option>
                                        <option value="outubro">Outubro</option>
                                        <option value="novembro">Novembro</option>
                                        <option value="dezembro">Dezembro</option>
                                    </select>
                                    {errors.mouth && touched.mouth && <p>{errors.mouth}</p>} 
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

export default NewPayroll


