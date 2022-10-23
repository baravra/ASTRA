import { Link } from "react-router-dom";
import { Calendar, IdentificationCard, ChartLine, BellRinging, Chats, UserCircle, Funnel } from "phosphor-react";
import './AgendaMedico.css'
import { useEffect, useState } from "react";
import axios from "axios";

interface Agenda{
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
    const [agendas, setAgenda] = useState<Agenda[]>([])
    useEffect(() => {
        fetch(`http://localhost:44/agendamentos/${medico}`)
            .then(response => response.json())
            .then(data => setAgenda(data))
    })    

    function FormatDateToDatabase(data: Date){
        // const dataFormatada = '' + data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + 'T' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
        const dataFormatada = '' + data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + 'T00:00:00' ;
        return dataFormatada;
    }
    function FormatDateToShow(data: Date){
        var dataFormatada = new Date(data.toString())
        dataFormatada = (dataFormatada.getDate() + '/' + (dataFormatada.getMonth() + 1) + '/' + dataFormatada.getFullYear() + ' ' + dataFormatada.getHours() + ':' + dataFormatada.getMinutes()).toString();
        return dataFormatada
    }
    async function  handleIniciar(id: number, pacienteId: number,pacienteName: string){

        try {
            await axios.get(`http://localhost:44/iniciarAgendamento/${id}`, {})

            localStorage.setItem("agendaId", id.toString())
            localStorage.setItem("pacienteId", pacienteId.toString())
            localStorage.setItem("pacienteName", pacienteName.toString())
        
        } catch (error) {
            console.log(error)
            alert("Erro ao atualizar status do agendamento!")
        }
    }

    return (
        <div className="box-main-agenda">
            <p className="welcome">Bem vindo(a) <span className="nome-medico">{medico}</span> </p>
            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Agendamentos do Dia</p>
                </div>

            
                <div className="esquerda">
                    <div className="circulo">
                        <Funnel size={32} color="#004B70"/>
                    </div>
                    <div className="circulo">
                        <Calendar size={32} color="#004B70" />
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
                            return(
                                <tr key={agenda.id}>
                                    <td>{agenda.secretariaName}</td>
                                    <td>{agenda.pacienteName}</td>
                                    <td>{FormatDateToShow(agenda.horario)}</td>
                                    <td>{agenda.convenio}</td>
                                    <td>{agenda.status}</td>
                                    <td className="iniciar" onClick={ () => handleIniciar(agenda.id, agenda.pacienteId, agenda.pacienteName) }  > <Link to='/Paciente' className="link">Iniciar Consulta</Link></td> 
                                </tr>    
                            )
                        })}
                        
                    </tbody>
                </table>

            </div>
        </div>
    );
}