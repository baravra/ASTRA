import { Link } from "react-router-dom";
import { Calendar, IdentificationCard, ChartLine, BellRinging, Chats, UserCircle, Funnel } from "phosphor-react";
import './AgendaMedico.css'
import { useEffect, useState } from "react";
import axios from "axios";

import ModalEmDesenvolvimento from "../Modal-Em-Desenvolvimento/Modal-Em-Desenvolvimento";
import ModalIniciaConsulta from "../Modal-Iniciar-Consulta/Modal-Iniciar-Consulta"


interface Agenda {
    secretariaName: string;
    medicoName: string;
    pacienteId: number;
    pacienteName: string;
    horario: Date;
    convenio: string;
    status: string;
    id: number;
}

export default function AgendaMedico() {
    var medico = localStorage.getItem('medico')
    if (!medico) {
        const win: Window = window;
        win.location = "/Login-Medico";
    }
    const [agendas, setAgenda] = useState<Agenda[]>([])
    useEffect(() => {
        fetch(`http://localhost:44/agendamentos/${medico}`)
            .then(response => response.json())
            .then(data => setAgenda(data))
    })

    function FormatDateToDatabase(data: Date) {
        // const dataFormatada = '' + data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + 'T' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
        const dataFormatada = '' + data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + 'T00:00:00';
        return dataFormatada;
    }
    function FormatDateToShow(data: Date) {
        var dataFormatada = new Date(data.toString())
        dataFormatada = (dataFormatada.getDate() + '/' + (dataFormatada.getMonth() + 1) + '/' + dataFormatada.getFullYear() + ' ' + dataFormatada.getHours() + ':' + dataFormatada.getMinutes()).toString();
        return dataFormatada
    }
    async function handleStatus(id: number, situacao: string) {


        if (situacao === 'return') {
            return
        }
        try {
            await axios.get(`http://localhost:44/iniciarAgendamento/${id}/${situacao}`, {})

        } catch (error) {
            console.log(error)
            alert("Erro ao atualizar status do agendamento!")
        }
    }

    function abrirmodal(){
        document.getElementById("modal-desenv")!.style.display = "block"
    }


    return (
        <div className="box-main-agenda">

            <ModalEmDesenvolvimento />

            <p className="welcome">Bem vindo(a) <span className="nome-medico">{medico}</span> </p>
        
            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Agendamentos do Dia</p>
                </div>


                <div className="esquerda">
                    <div className="circulo">
                        <Calendar size={32} color="#004B70" onClick={abrirmodal}/>
                    </div>

                </div>

            </div>

            <div className="box-tabela">
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th>Agendado por</th>
                            <th>Nome do Paciente</th>
                            <th>Data</th>
                            <th>Convênio</th>
                            <th>Satatus da consulta</th>
                            <th className="direita"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendas.map(agenda => {
                            var situacaoBanco = ""
                            if (agenda.status == "Agendada") {
                                situacaoBanco = "Iniciar Consulta"
                                var situacao = "Em Andamento"
                                //document.getElementById("statusagendamento")!.style.color = "#379206"
                            } else if (agenda.status == "Finalizado") {
                                situacaoBanco = "Consulta Finalizada"
                                var situacao = "Finalizada"
                            } else if (agenda.status.toLocaleUpperCase() == "EM ANDAMENTO") {
                                situacaoBanco = "Finalizar Consulta"
                                var situacao = "Finalizada"
                                //document.getElementById("statusagendamento")!.style.color = "#EAA001"
                            } else if (agenda.status == "Finalizada") {
                                situacaoBanco = agenda.status
                                //document.getElementById("statusagendamento")!.style.color = "#EA2F01"
                                var situacao = "return"
                            }

                           


                            return (
                                <tr key={agenda.id}>
                                    <td>{agenda.secretariaName}</td>
                                    <td>{agenda.pacienteName}</td>
                                    <td>{FormatDateToShow(agenda.horario)}</td>
                                    <td>{agenda.convenio}</td>
                                    <td id="statusagendamento">{agenda.status}</td>
                                    <td className="iniciar" id={agenda.id.toString()} onClick={() => handleStatus(agenda.id, situacao)}> {situacaoBanco}  </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    );
}