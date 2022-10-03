import {Link} from "react-router-dom";
import '../css/Home.css'


export default function Home () {
    return(
    <div className="box">  
        <img src="aviso.png" className="image-construction"/>
        <h1>PÁGINA EM CONSTRUÇÃO</h1>
        <br /><br />
        <Link to='/Login-Cliente' className="button"> Clique para ir para a Área do Cliente </Link>
        <br /><br />
        <Link to='/Login-Medico' className="button"> Clique para ir para a Área do Médico </Link>


    </div>
    )
}