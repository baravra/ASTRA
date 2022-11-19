import { Link } from "react-router-dom";
import '../css/HomeMedico.css'

import BarraLateral from "../components/Barra-Lateral-Medico/Barra-Lateral";
import PerfilMedico from "../components/PerfilMedico/PerfilMedico";


export default function SistemaHome() {
    return (
        <div>
            <BarraLateral />
            <PerfilMedico />
        </div>

    )
}