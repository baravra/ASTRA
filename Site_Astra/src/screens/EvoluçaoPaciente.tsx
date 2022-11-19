import { Link } from "react-router-dom";
import '../css/HomeMedico.css'

import BarraLateral from "../components/Barra-Lateral-Medico/Barra-Lateral";
import EvolucaoPaciente from "../components/EvoluçaoPaciente/EvolucaoPaciente";


export default function EvolucaoDoPaciente() {
    return (
        <div>
            <BarraLateral />
            <EvolucaoPaciente />
        </div>

    )
}