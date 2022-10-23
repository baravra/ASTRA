import {Link} from "react-router-dom";


import BarraLateral from "../components/Barra-Lateral-Medico/Barra-Lateral";
import ListaPaciente from "../components/ListaPaciente/ListaPaciente";

export default function ListaPacientes () {
    return(
    <div className="box-lista"> 
        <BarraLateral />
        <ListaPaciente />
    </div>
    )
}