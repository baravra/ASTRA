import {Link} from "react-router-dom";
import '../css/EsqueciSenhaMedico.css'

import EsqueciSenhaMedico from "../components/Main-Box-Esqueci-Senha-Medico/Main-Box-Senha-Medico";

export default function EsqueciaSenha () {
    return(
    <div className="box-esqueci-senha-medico"> 
        <EsqueciSenhaMedico />
    </div>
    )
}