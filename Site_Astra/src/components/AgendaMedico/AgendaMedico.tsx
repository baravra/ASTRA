import { Link } from "react-router-dom";
import { Calendar, IdentificationCard, ChartLine, BellRinging, Chats, UserCircle, Funnel } from "phosphor-react";
import './AgendaMedico.css'

export default function AgendaMedico() {
    var medico = "Fabrício Santos"

    var pacientes = [
        {
            id: '1',
            agendou: "Carla Assis",
            medico: "Thiago Freitas",
            paciente: "Paulino Cândido Pinto",
            data: "27/10/20220",
            hora: "10:40",
            convenio: "Particular",
            status: "Finalizada",
        },
        {
            id: "2",
            agendou: "Carla Assis",
            medico: "Thiago Freitas",
            paciente: "Lara de Oliveira Santos",
            data: "27/10/20220",
            hora: "14:40",
            convenio: "Particular",
            status: "Confirmada",
        },
        {
            id: "3",
            agendou: "Mariana Alves",
            medico: "Thiago Freitas",
            paciente: "Camila Pedreira Montesquiel",
            data: "27/10/20220",
            hora: "15:40",
            convenio: "Particular",
            status: "Agendada",
        },
        {
            id: "4",
            agendou: "Luciene Pereira",
            medico: "Thiago Freitas",
            paciente: "Pedro Henquique da Silva",
            data: "27/10/20220",
            hora: "16:40",
            convenio: "Particular",
            status: "Confirmada",
        },
        {
            id: "5",
            agendou: "Luciene Pereira",
            medico: "Thiago Freitas",
            paciente: "Sofia Rocha Silva",
            data: "27/10/20220",
            hora: "17:40",
            convenio: "Particular",
            status: "Confirmada",
        },
        {
            id: "6",
            agendou: "Mariana Alves",
            medico: "Thiago Freitas",
            paciente: "Carlos Pinto Rocha",
            data: "27/10/20220",
            hora: "18:40",
            convenio: "Particular",
            status: "Confirmada",
        }
    ];

    function InicarConsulta(id: string) {
        alert("Iniciando Consulta" + id)
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
                            <th>Hora</th>
                            <th>Convênio</th>
                            <th>Satatus da consulta</th>
                            <th className="direita"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pacientes[0].agendou}</td>
                            <td>{pacientes[0].paciente}</td>
                            <td>{pacientes[0].data}</td>
                            <td>{pacientes[0].hora}</td>
                            <td>{pacientes[0].convenio}</td>
                            <td> {pacientes[0].status} </td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td>
                        </tr>
                        <tr>
                            <td>{pacientes[1].agendou}</td>
                            <td>{pacientes[1].paciente}</td>
                            <td>{pacientes[1].data}</td>
                            <td>{pacientes[1].hora}</td>
                            <td>{pacientes[1].convenio}</td>
                            <td> {pacientes[1].status}</td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td></tr>
                        <tr>
                            <td>{pacientes[2].agendou}</td>
                            <td>{pacientes[2].paciente}</td>
                            <td>{pacientes[2].data}</td>
                            <td>{pacientes[2].hora}</td>
                            <td>{pacientes[2].convenio}</td>
                            <td>{pacientes[2].status}</td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td></tr>
                        <tr>
                            <td>{pacientes[3].agendou}</td>
                            <td>{pacientes[3].paciente}</td>
                            <td>{pacientes[3].data}</td>
                            <td>{pacientes[3].hora}</td>
                            <td>{pacientes[3].convenio}</td>
                            <td>{pacientes[3].status}</td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td></tr>
                        <tr>
                            <td>{pacientes[4].agendou}</td>
                            <td>{pacientes[4].paciente}</td>
                            <td>{pacientes[4].data}</td>
                            <td>{pacientes[4].hora}</td>
                            <td>{pacientes[4].convenio}</td>
                            <td>{pacientes[4].status}</td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td></tr>
                        <tr>
                            <td>{pacientes[5].agendou}</td>
                            <td>{pacientes[5].paciente}</td>
                            <td>{pacientes[5].data}</td>
                            <td>{pacientes[5].hora}</td>
                            <td>{pacientes[5].convenio}</td>
                            <td>{pacientes[5].status}</td>
                            <td className="iniciar"> <Link to='/Paciente' className="link" >Iniciar Consulta</Link></td></tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}