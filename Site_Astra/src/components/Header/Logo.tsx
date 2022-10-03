import {Link} from "react-router-dom";
import Logo from '../../assets/Logo-Branco.png'
import './Logo.css'



export default function ImagemLogo () {
    return(
    <div className="box-image">
        <img src={Logo} alt="" className="logo-image" />
        <img src="../../assets/Logo-Branco.png" alt="" />
    </div>
    )
}