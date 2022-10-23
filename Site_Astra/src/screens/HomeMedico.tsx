import { Link } from "react-router-dom";
import '../css/HomeMedico.css'

import BarraLateral from "../components/Barra-Lateral-Medico/Barra-Lateral";
import AgendaMedico from "../components/AgendaMedico/AgendaMedico";


export default function SistemaHome() {
    return (
        <div>
            <BarraLateral />
            <AgendaMedico />
        </div>

    )
}