import {Link} from "react-router-dom";
import '../css/LoginMedico.css'

import MedicoLogin from "../components/Main-Box-Login-Medico/Main-Box-Login-Medico";

export default function LoginMedico () {
    return(
    <div className="box-login"> 
        {/* <ImagemLogo /> */}
        <MedicoLogin />
    </div>
    )
}