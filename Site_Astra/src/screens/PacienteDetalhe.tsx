import {Link} from "react-router-dom";


import BarraLateral from "../components/Barra-Lateral-Medico/Barra-Lateral";
import Paciente from "../components/Paciente/Paciente";

export default function ListaPacientes () {
    return(
    <div className="box-lista"> 
        <BarraLateral />
        <Paciente />
    </div>
    )
}