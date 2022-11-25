import { Link } from "react-router-dom";
import {
  Calendar,
  IdentificationCard,
  ChartLine,
  BellRinging,
  Chats,
  UserCircle,
} from "phosphor-react";
import "./Barra-Lateral.css";

import icone from "./icone.png";
import ModalEmDesenvolvimento from "../Modal-Em-Desenvolvimento/Modal-Em-Desenvolvimento";

export default function BarraLateral() {
  function abrirmodal() {
    document.getElementById("modal-desenv")!.style.display = "block";
  }

  return (
    <div className="box-barra">
      <ModalEmDesenvolvimento />

      <img src="./icone.png" alt="" className="logo-icone" />
      <div className="funcionalidades">
        <Link to="/Home-Medico">
          <Calendar size={52} color="white" className="func" />
        </Link>
        <Link to="/Lista-Pacientes">
          <IdentificationCard size={52} color="white" className="func" />
        </Link>
      </div>
      <div className="opcoes">
        <a href="https://wa.me/5531981000577">
          <Chats size={42} color="white" className="func" />
        </a>
        <Link to="/Perfil-Medico">
          <UserCircle size={42} color="white" className="func" />
        </Link>
      </div>
    </div>
  );
}
