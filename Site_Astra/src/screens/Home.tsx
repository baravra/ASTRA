import { Link } from "react-router-dom";
import { FirstAidKit, Note, Timer, GameController, LightbulbFilament, DesktopTower, ChartLineUp, Brain, ListChecks, Alarm, Calendar, ChatText } from "phosphor-react";

import '../css/Home.css'
import logo from '../../public/logo.png'
import Barbara from '../../public/barb.png'
import Camilli from '../../public/Camilli.png'
import Lara from '../../public/Lara.png'
import { useEffect } from "react";


export default function Home() {

    return (
        <div className="box-total">
            <div className="box-apresentation">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" className="logoimage" />
                    </div>
                    <div className="options">
                        <div className="links">
                            <a href="#" className="opt">Home</a>
                            <a href="#OqueOfere" className="opt">O que oferecemos? </a>
                            <a href="#SobreNos" className="opt">Sobre Nós</a>
                            <a href="#Contatos" className="opt">Contatos</a>
                            <a href="#FAQ " className="opt">FAQ</a>
                        </div>

                        <div className="box-opt"> <Link to='/Login-Cliente' className="opt white"> Área do Médico </Link> </div>
                        <div className="box-opt"> <Link to='/Login-Cliente' className="opt white"> Área do Paciente </Link> </div>
                    </div>
                </div>
                <div className="text-apresentation">
                    <div className="line1">
                        Em busca de agilidade e leveza
                    </div>
                    <div className="line2">
                        para seu tratamento!
                    </div>
                </div>
            </div>

            <div className="ofPaciente" id="OqueOfere">
                <div className="line">
                    Oque oferecemos para os pacientes?
                </div>

                <div className="lin1">
                    <div className="box-func">
                        <FirstAidKit size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <Note size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <Timer size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <GameController size={90} color="#004B70" className="icone" />

                    </div>
                </div>
                <div className="lin1">
                    <div className="box-func-desc">

                        <div className="desc-funct">
                            Relação mais próxima de você e seu médico
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct">
                            Organização de suas metas e objetivos
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct">
                            Agilidade em sua consulta
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct">
                            Gameficação de suas metas podendo ganhar recompensas
                        </div>
                    </div>
                </div>


                <div className="lin1">
                    <div className="box-func">
                        <LightbulbFilament size={90} color="#004B70" className="icone" />
                    </div>
                    <div className="box-func">
                        <DesktopTower size={90} color="#004B70" className="icone" />
                    </div>
                    <div className="box-func">
                        <ChartLineUp size={90} color="#004B70" className="icone" />
                    </div>
                </div>
                <div className="lin1">
                    <div className="box-func-desc">

                        <div className="desc-funct">
                            Dinamismo e facilidade para melhor navegação em nosso sistema
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct">
                            Um sistema intuitivo e organizado da melhor maneira para você
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct">
                            Análise e Acompanhamento da Evolução do seu Tratamento
                        </div>
                    </div>
                </div>


            </div>

            <div className="ofMedico" id="OqueOfere">
                <div className="line medic">
                    Oque oferecemos para os nosso Médicos?
                </div>

                <div className="lin1 medico">
                    <div className="box-func">
                        <Brain size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <ListChecks size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <Alarm size={90} color="#004B70" className="icone" />
                    </div>

                </div>
                <div className="lin1 medico">
                    <div className="box-func-desc">

                        <div className="desc-funct-medic">
                            Dinamismo e personalização para sua consulta
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct-medic">
                            Organização de seus pacientes e tarefas do dia
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct-medic">
                            Agilidade em suas consultas
                        </div>
                    </div>

                </div>


                <div className="lin1">
                    <div className="box-func">
                        <Calendar size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <ChatText size={90} color="#004B70" className="icone" />

                    </div>
                    <div className="box-func">
                        <ChartLineUp size={90} color="#004B70" className="icone" />
                    </div>

                </div>
                <div className="lin1">
                    <div className="box-func-desc">

                        <div className="desc-funct-medic">
                            Controle de sua agenda diária, mensal e anual de consultas e de seus pacientes
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct-medic">
                            Troca de informações e agendamentos com sua secretária.
                        </div>
                    </div>
                    <div className="box-func-desc">
                        <div className="desc-funct-medic">
                            Análise e Acompanhamento da Evolução de suas Consultas
                        </div>
                    </div>
                </div>


            </div>

            <div className="equipe" id="SobreNos">
                <div className="titulosobre">
                    Equipe Astra
                </div>

                <div className="equipdesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>

                <div className="fotosEquipe">
                    <div className="boxFoto Camilli">
                        <p className="nomeEquipe"> Camilli Joannes</p>
                        <p className="cargoEquipe"> CEO e FrontEnd</p>
                    </div>
                    <div className="boxFoto Barbara">
                        <p className="nomeEquipe"> Bárbara Leão</p>
                        <p className="cargoEquipe"> BackEnd</p>
                    </div>
                    <div className="boxFoto Lara">
                        <p className="nomeEquipe"> Lara Eduarda</p>
                        <p className="cargoEquipe"> Marketing</p>
                    </div>

                </div>
            </div>

            <div className="faq" id="FAQ">
                esfsef
            </div>

            <h1 className="mar">weijfe</h1>
        </div>
    )
}