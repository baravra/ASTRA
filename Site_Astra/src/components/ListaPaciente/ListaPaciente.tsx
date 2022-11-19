import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import './ListaPaciente.css'

import ModalEmDesenvolvimento from "../Modal-Em-Desenvolvimento/Modal-Em-Desenvolvimento";
import { useEffect, useState } from "react";
import axios from "axios";

interface Paciente {
    id: number;
    name: string;
}

export default function ListaPaciente() {
    var medico = localStorage.getItem('medico')
    var medicoId = localStorage.getItem('medicoId')
    localStorage.removeItem('pacienteName')

    const [pacientes, setPacientes] = useState<Paciente[]>([])
    useEffect(() => {
        axios(`http://localhost:44/listarPacientes/${medicoId}`).then(response => setPacientes(response.data))
    }, [] )

    async function handleFind(){
        
        try{
            let input = (document.getElementById('busca') as HTMLInputElement)!.value
            if(!input){
                return
            }
            axios(`http://localhost:44/buscarPaciente/${medicoId}/${input}`).then(response => setPacientes(response.data))
        }catch(error){
            console.log(error)
            alert("Erro ao encontrar paciente!")
        }
    }

    function abrirmodal(){
        document.getElementById("modal-desenv")!.style.display = "block"
    }

    return (
        <div className="box-main-agenda">
             <div className="modal fade" id="ExemploModalCentralizado" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-body corpo-modal">

                        <img src="aviso.png" alt="" className='imagem-constru'/>
                        FUNCIONALIDADE EM DESENVOLVIMENTO
                    </div>
                    <div className="modal-footer rodapemodal">
                        <button type="button" className="btn btn-secondary botaook" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

            <div className="cabecalho">
                <div className="Agendamentos">
                    <p className="agenda">Pacientes</p>
                </div>

                <div className="busca">
                    <input type="text" name="busca" id="busca" onChange={handleFind} />
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
                        {pacientes.map(paciente => {
                            return (
                                <tr key={paciente.id}> 
                                    <td>{paciente.id}</td>
                                    <td>{paciente.name}</td>
                                    <td className="iniciar"> <Link to='/Paciente' className="link"  onClick={() => localStorage.setItem("pacienteName",paciente.name) }  >Prontuário</Link></td>
                                    <td className="iniciar">  <Link to='/Evolucao-Paciente' className="link" >Desenvolvimento</Link> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}