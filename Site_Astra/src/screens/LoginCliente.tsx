import {Link} from "react-router-dom";
import '../css/LoginCliente.css'

import ImagemLogo from "../components/Header/Logo";
import MainBox from "../components/Main-Box-Login-Cliente/Main-Box-Login";

import ModalCamposFalta from "../components/Modal-FaltaCampo/Modal-FaltaCampo";
import ModalCadastroSucesso from "../components/Modal-Sucesso-Cadastro/Modal-Cadastro";
import ModalSenhaSucesso from "../components/Modal-Sucesso-Senha/Modal-Senha";

export default function LoginCliente () {
    return(
    <div className="box-login"> 
        <MainBox />

        {/* <ModalSenhaSucesso /> */}
        {/* <ModalCadastroSucesso /> */}
        {/* <ModalCamposFalta /> */}

    </div>
    )
}