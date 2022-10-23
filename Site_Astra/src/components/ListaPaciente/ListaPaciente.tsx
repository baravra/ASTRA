import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import './ListaPaciente.css'

export default function ListaPaciente() {
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
            codigo: "123456789"
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
            codigo: "123456789"
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
            codigo: "123456789"
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
            codigo: "123456789"
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
            codigo: "123456789"
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
            codigo: "123456789"
        }
    ];

    function InicarConsulta(id: string) {
        alert("Iniciando Consulta" + id)
    }

    return (
        <div className="box-main-agenda">
            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Pacientes</p>
                </div>

                <div  className="busca">
                    <input type="text" name="busca" id="busca" />
                    <MagnifyingGlass size={30} />
                </div>
            </div>

            <div className="box-tabela">
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th>Código</th>
                            <th>Nome do Paciente</th>
                            <th className="direita"></th>
                            <th className="direita"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pacientes[0].codigo}</td>
                            <td>{pacientes[0].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                        <tr>
                            <td>{pacientes[1].codigo}</td>
                            <td>{pacientes[1].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                        <tr>
                            <td>{pacientes[2].codigo}</td>
                            <td>{pacientes[2].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                        <tr>
                            <td>{pacientes[3].codigo}</td>
                            <td>{pacientes[3].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                        <tr>
                            <td>{pacientes[4].codigo}</td>
                            <td>{pacientes[4].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                        <tr>
                            <td>{pacientes[5].codigo}</td>
                            <td>{pacientes[5].paciente}</td>
                            <td className="iniciar"> Prontuário</td>
                            <td className="iniciar"> Desenvolvimento</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}