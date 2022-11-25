import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastrar from "../screens/Cadastrar";
import EsqueciaSenha from "../screens/EsqueciASenha";
import EsqueciaSenhaMedico from "../screens/EsqueciASenhaMedico";
import EvolucaoDoPaciente from "../screens/EvoluçaoPaciente";
import Home from "../screens/Home";
import HomeMedico from "../screens/HomeMedico";
import ListaPacientes from "../screens/ListaPacientes";
import LoginCliente from "../screens/LoginCliente";
import LoginMedico from "../screens/LoginMedico";
import PacienteDetalhe from "../screens/PacienteDetalhe";
import PerfilMedico from "../screens/PerfilMedico";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login-Cliente" element={<LoginCliente />} />
        <Route path="/Esqueci-Senha" element={<EsqueciaSenha />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Login-Medico" element={<LoginMedico />} />
        <Route path="/Esqueci-Senha-Medico" element={<EsqueciaSenhaMedico />} />
        <Route path="/Home-Medico" element={<HomeMedico />} />
        <Route path="/Lista-Pacientes" element={<ListaPacientes />} />
        <Route path="/Paciente" element={<PacienteDetalhe />} />
        <Route path="/Perfil-Medico" element={<PerfilMedico />} />
        <Route path="/Evolucao-Paciente" element={<EvolucaoDoPaciente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
