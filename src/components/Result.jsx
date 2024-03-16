import { useCallback, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"


const Result = () => {

    const { result, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback(
            MARCAS.filter(m => m.id === Number(marca)),
            [result]
        )
    const [planElegido] = useCallback(
            PLANES.filter(p => p.id === Number(plan)),
            [result]
        )
        

    if(result === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold"> Marca: </span>
                    {nombreMarca.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold"> Plan: </span>
                    {planElegido.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold"> Año del coche: </span>
                    {yearRef.current}
            </p>


            <p className="font-bold uppercase">
                Total Cotización: {' '}
                <span className="text-indigo-400 text-xl font-bold">{result}</span>
            </p>

    </div>
  )
}

export default Result