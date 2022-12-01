import { useContext } from "react"
import Cards from "../Components/Cards"
import { GlobalContext } from "../Context/GlobalContext"

export function Card (){

    const context = useContext(GlobalContext);
    const { usuarios, mudaEstado, click } = context;

    return (
        <>
            {usuarios.map((usuario)=>{
                return <Cards key={usuario.id} usuario={usuario} />
            })}
            
        </>
    )
}