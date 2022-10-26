import { Link } from "react-router-dom";
import { Calendar, IdentificationCard, ChartLine, BellRinging, Chats, UserCircle } from "phosphor-react";
import './Barra-Lateral.css'

import icone from "./icone.png"
import ModalEmDesenvolvimento from "../Modal-Em-Desenvolvimento/Modal-Em-Desenvolvimento";


export default function BarraLateral() {


    return (
        <div className="box-barra">
            <ModalEmDesenvolvimento />

            <img src="./icone.png" alt="" className="logo-icone" />
            <div className="funcionalidades">
                <Link to='/Home-Medico' > <Calendar size={52} color="white" className="func" /></Link>
                <Link to='/Lista-Pacientes'> <IdentificationCard size={52} color="white" className="func" /></Link>

                <ChartLine size={52} color="white" className="func" data-toggle="modal" data-target="#ExemploModalCentralizado" />
            </div>
            <div className="opcoes">
                <Chats size={42} color="white" className="func" data-toggle="modal" data-target="#ExemploModalCentralizado" />
                <UserCircle size={42} color="white" className="func" data-toggle="modal" data-target="#ExemploModalCentralizado" />
            </div>
        </div>
    )
}