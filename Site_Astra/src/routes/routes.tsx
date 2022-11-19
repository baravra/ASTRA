import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


import Home from "../screens/Home";
import LoginCliente from "../screens/LoginCliente";
import EsqueciaSenha from "../screens/EsqueciASenha";
import Cadastrar from "../screens/Cadastrar";
import EsqueciaSenhaMedico from "../screens/EsqueciASenhaMedico";
import LoginMedico from "../screens/LoginMedico";
import HomeMedico from  "../screens/HomeMedico"
import ListaPacientes from  "../screens/ListaPacientes"
import PacienteDetalhe from "../screens/PacienteDetalhe"
import PerfilMedico from "../screens/PerfilMedico";
import EvolucaoDoPaciente from "../screens/EvoluçaoPaciente";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Login-Cliente" element={<LoginCliente/>}/>
                <Route path="/Esqueci-Senha" element={<EsqueciaSenha/>}/>
                <Route path="/Cadastrar" element={<Cadastrar/>}/>
                <Route path="/Login-Medico" element={<LoginMedico/>}/>
                <Route path="/Esqueci-Senha-Medico" element={<EsqueciaSenhaMedico/>}/>
                <Route path="/Home-Medico" element={<HomeMedico/>}/>
                <Route path="/Lista-Pacientes" element={<ListaPacientes/>}/>
                <Route path="/Paciente" element={<PacienteDetalhe/>}/>
                <Route path="/Perfil-Medico" element={<PerfilMedico/>}/>
                <Route path="/Evolucao-Paciente" element={<EvolucaoDoPaciente/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas;
