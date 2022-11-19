import { Link } from "react-router-dom";
import { Pencil } from "phosphor-react";
import './EvolucaoPaciente.css';
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";


export default function EvolucaoPaciente() {


    // Colocando as coisas que devem ser puxadas do banco aqui, só pra você saber no layout o que vai ser variável
    // Se não tiver, add as colunas no banco
    var paciente = {
        nome: "Camilli Joannes",

    }

    function formatDate(data: Date) {
        let date = new Date(data);
        return date.toLocaleDateString('pt-BR')

    }


    return (
        <div className="box-paciente">
            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Evolução do Paciente</p>
                </div>
            </div>
            <div className="campo-box-input-evol">
                <p className="label">Nome:</p>
                <input name="cpf" id="cpf" placeholder={paciente.nome} disabled className="campo-input-medic" />
            </div>

            <div className="main-box-medic-profile">

                <img src="grafico.png" alt="" className="grafico" />
            </div>

        </div>
    );
}