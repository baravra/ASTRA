import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


import Home from "../screens/Home";
import LoginCliente from "../screens/LoginCliente";
import EsqueciaSenha from "../screens/EsqueciASenha";
import SistemaHome from "../screens/Sistema-Medico-Home";
import Cadastrar from "../screens/Cadastrar";

import LoginMedico from "../screens/LoginMedico";


function Rotas() {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Login-Cliente" element={<LoginCliente/>}/>
                <Route path="/Esqueci-Senha" element={<EsqueciaSenha/>}/>
                <Route path="/Cadastrar" element={<Cadastrar/>}/>
                <Route path="/Inicio" element={<SistemaHome/>}/>
                <Route path="/Login-Medico" element={<LoginMedico/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas;
