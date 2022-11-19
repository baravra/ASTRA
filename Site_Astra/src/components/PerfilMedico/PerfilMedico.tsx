import { Link } from "react-router-dom";
import { Pencil } from "phosphor-react";
import './PerfilMedico.css';
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";


export default function PerfilMedico() {


    // Colocando as coisas que devem ser puxadas do banco aqui, só pra você saber no layout o que vai ser variável
    // Se não tiver, add as colunas no banco
    var medico = {
        nome: "Pablo Henrique",
        cpf: "000.000.000-00",
        datanascimento: "29/03/1985",
        clinica: "Clínica do Sol",
        foto: "https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/630036/630036054d464bcfce04d45a9e4556a3_large.jpg",
        telefone: "(31) 99999-9999",
        crm: "CRM/MG 123456",

    }

    function formatDate(data: Date) {
        let date = new Date(data);
        return date.toLocaleDateString('pt-BR')

    }


    return (
        <div className="box-paciente">
            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Perfil</p>
                </div>
            </div>

            <div className="main-box-medic-profile">
                <div className="box-image-profile">
                    <img src={medico.foto} alt="" className="image-profile" />
                    <div className="edit-box">
                        <Pencil size={25} color="white" />
                    </div>
                </div>
                <div className="infos-medic">
                    <form>
                        <div className="infos-col">
                            <div className="campo-box-input-medic">
                                <p className="label">Nome:</p>
                                <input name="nome" id="nome" placeholder={medico.nome} disabled className="campo-input-medic" />
                            </div>
                            <div className="campo-box-input-medic">
                                <p className="label">CPF:</p>
                                <input name="cpf" id="cpf" placeholder={medico.cpf} disabled className="campo-input-medic" />
                            </div>
                            <div className="campo-box-input-medic">
                                <p className="label">Data de Nascimento:</p>
                                <input name="datanasc" id="datanasc" placeholder={medico.datanascimento} disabled className="campo-input-medic" />
                            </div>
                        </div>
                        <div className="infos-col">
                            <div className="campo-box-input-medic">
                                <p className="label">CRM:</p>
                                <input name="crm" id="crm" placeholder={medico.crm} disabled className="campo-input-medic" />
                            </div>
                            <div className="campo-box-input-medic">
                                <p className="label">Clínica:</p>
                                <input name="clinica" id="clinica" placeholder={medico.clinica} disabled className="campo-input-medic" />
                            </div>
                            <div className="campo-box-input-medic">
                                <p className="label">Telefone:</p>
                                <input name="tel" id="tel" placeholder={medico.telefone} disabled className="campo-input-medic" />
                            </div>

                        </div>


                    </form>
                </div>
            </div>

        </div>
    );
}