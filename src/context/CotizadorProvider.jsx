import { createContext, useState } from "react";
import { obtainYearDifference, calculateBrand, calculatePlan, formatCurrency } from "../helpers/index"


const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan:''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const contizarSeguros = () => {
        // Una base
        let result = 2000;
        // Obtener diferencia de años
        const difference = obtainYearDifference(datos.year)
        
        // Hay que restar el 3% por cada año
        result -= ((difference * 3) * result) / 100
        
        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        
        result *= calculateBrand(datos.marca)
        // Básico 20%
        // Completo 50%

        result *= calculatePlan(datos.plan)
        
        // Formatear dinero 
        // result = result.toFixed(2)
        result = formatCurrency(result)
        
        setLoading(true)
        setTimeout(() => {
            setResult(result)
            setLoading(false)
        },3000)
    }

    return(
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                contizarSeguros,
                result,
                loading
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext