import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import './Paciente.css';
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";

interface Prontuario{
    id: string;  
    pacienteName: string;
    createdAt: Date;
    nascimento: Date;
    telefone: string;
    telefone2: string;
    telefoneEmergencia: string;
    email: string;
    sexo: string;
    escolaridade: string;
    ocupacao: string;
    limitacao: string;
    alergia: string;
    alcool: string;
    ativo: string;
    idade: number;
    convenio: string;
}
export default function Paciente() {
    const [prontuarios, setProntuario] = useState<Prontuario[]>([])
    const pacienteName = localStorage.getItem('pacienteName')
      
    useEffect(() => {
        axios(`http://localhost:44/prontuario/${pacienteName}`).then(response => setProntuario(response.data))
    }, [] )

    var paciente = {
        lastconsulta: 12,
    }

    function formatDate(data: Date) {
        let date = new Date(data);
        return date.toLocaleDateString('pt-BR')

    }


    return (
        <div className="box-paciente">
            <div className="perfil">
                <div className="perfil-infos">
                    <div>
                        <img src="https://media.discordapp.net/attachments/818657895776387074/1033149971479924807/image_183.png" alt="" className="img-perfil" />
                    </div>
                    <div className="dados">
                        <p className="nome"> {pacienteName}</p>
                        <div className="linha-pac">
                            <p className="idade"> {prontuarios[0]?.idade}  anos </p>
                            <div className="box-convenio">
                                <div className="conv"> CONVÊNIO</div>
                                <div className="enio"> {prontuarios[0]?.convenio} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot-funcionalidades">
                    <div className="bot-1">
                        <div className="but-fun"> Consultas </div>
                        <div className="but-fun"> Análise de Progresso </div>
                    </div>
                    <div className="bot-2">
                        <div className="but-fun"> Visualizar Prescrição </div>
                        <div className="but-fun finalizar" > Finalizar Consulta </div>
                    </div>
                    <div className="last-consul"> O último atendimento foi feito a {paciente.lastconsulta} dias! </div>
                </div>
            </div>
            <div className="prontuario">
                <form action="">
                    <div className="line">
                        <div className="campo-box metade">
                            <p className="campo-text"> Número do Prontuário:</p>
                            <div className="campo-box-input">
                                <input type="text" name="numpront" id="numpront" className="campo-input" placeholder={prontuarios[0]?.id}  disabled/>
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Data de Abertura:</p>
                            <div className="campo-box-input">
                                <input type="text" name="databer" id="databer" className="campo-input" placeholder={formatDate(prontuarios[0]?.createdAt)}  disabled />
                            </div>
                        </div>
                    </div>
                    <div className="full">
                        <div className="campo-box">
                            <p className="campo-text"> Nome Completo:</p>
                            <div className="campo-box-input">
                                <input type="text" name="nome" id="nome" className="campo-input "  placeholder={pacienteName!}  disabled />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Data de Nascimento:</p>
                            <div className="campo-box-input">
                                <input type="text" name="nascimento" id="nascimento" className="campo-input" placeholder={formatDate(prontuarios[0]?.nascimento)}   disabled />
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Sexo Biológico:</p>
                            <div className="campo-box-input">
                                <div className="sexo">
                                    { prontuarios[0]?.sexo === "F" ? 
                                        <input type="checkbox" name="f" id="f" checked /> 
                                        : <input type="checkbox" name="f" id="f" />
                                    }
                                    <p className="sexo-op"> Feminino </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.sexo === "M" ? 
                                        <input type="checkbox" name="m" id="m" checked /> 
                                        : <input type="checkbox" name="m" id="m" />
                                    }
                                    <p className="sexo-op"> Masculino </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="line top">
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone 1:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999" name="tel1" id="tel1"  placeholder={prontuarios[0]?.telefone}  disabled  className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone 2:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999"  placeholder={prontuarios[0]?.telefone2} name="tel2" id="tel2" disabled  className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Email:</p>
                            <div className="campo-box-input">
                                <input type="email" name="email" id="email"  placeholder={prontuarios[0]?.email} disabled  className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone Emergência:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999" name="telemer" id="telemer"  placeholder={prontuarios[0]?.telefoneEmergencia} disabled  className="campo-input" />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Escolaridade:</p>
                            <div className="campo-box-input">
                                <input type="text" name="escolaridade" id="escolaridade"  placeholder={prontuarios[0]?.escolaridade} className="campo-input" disabled />
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Ocupação:</p>
                            <div className="campo-box-input">
                                <input type="text" name="escolaridade" id="escolaridade"  placeholder={prontuarios[0]?.ocupacao} className="campo-input" disabled />
                            </div>
                        </div>
                    </div>



                    {/* <button onClick={salvar}>Salvar</button> */}
                </form>


            </div>
            <div className="prontuario">
                <form action="">
                    <div className="full prim">
                        <div className="campo-box ">
                            <p className="campo-text"> Limitação:</p>
                            <div className="campo-box-input">
                                <div className="sexo">
                                    { prontuarios[0]?.limitacao == "1" ? 
                                        <input type="checkbox" name="1" id="1" checked disabled/> 
                                        : <input type="checkbox" name="1" id="1" disabled/>
                                    }                                    
                                    <p className="sexo-op"> Intelectual </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.limitacao == "2" ? 
                                        <input type="checkbox" name="2" id="2" checked disabled/> 
                                        : <input type="checkbox" name="2" id="2" disabled/>
                                    }  
                                    <p className="sexo-op"> Visual </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.limitacao == "3" ? 
                                        <input type="checkbox" name="3" id="3" checked disabled/> 
                                        : <input type="checkbox" name="3" id="3" disabled/>
                                    }  
                                    <p className="sexo-op"> Auditiva </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.limitacao == "4" ? 
                                        <input type="checkbox" name="4" id="4" checked disabled/> 
                                        : <input type="checkbox" name="4" id="4" disabled/>
                                    }  
                                    <p className="sexo-op"> Fisica </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.limitacao == "5" ? 
                                        <input type="checkbox" name="5" id="5" checked disabled/> 
                                        : <input type="checkbox" name="5" id="5" disabled/>
                                    }  
                                    <p className="sexo-op"> Outra </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Possui Alergia?</p>
                            <div className="campo-box-input">
                                <div className="sexo">                                    
                                    { prontuarios[0]?.alergia == "1" ? 
                                        <input type="checkbox" name="alergiaS" id="alergiaS" checked disabled/>
                                        : <input type="checkbox" name="alergiaS" id="alergiaS" disabled/>
                                    }  
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.alergia == "0" ? 
                                        <input type="checkbox" name="alergiaN" id="alergiaN" checked disabled/>
                                        : <input type="checkbox" name="alergiaN" id="alergiaN" disabled/>
                                    } 
                                    <p className="sexo-op"> Não </p>
                                </div>
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Quais?</p>
                            <div className="campo-box-input">
                                <input type="text" name="databer" id="databer" className="campo-input" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Consome Bebida Acólica?</p>
                            <div className="campo-box-input">
                                <div className="sexo">                                    
                                    { prontuarios[0]?.alcool == "1" ? 
                                        <input type="checkbox" name="simbebida" id="simbebida" disabled checked />
                                    : <input type="checkbox" name="simbebida" id="simbebida" disabled/>
                                    } 
                                    
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">                                    
                                    { prontuarios[0]?.alcool == "1" ? 
                                        <input type="checkbox" name="naobebida" id="naobebida"disabled checked  />
                                    : <input type="checkbox" name="naobebida" id="naobebida" disabled/>
                                    } 
                                    <p className="sexo-op"> Não </p>
                                </div>
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Pratica Atividade Física?</p>
                            <div className="campo-box-input">
                                <div className="sexo">                                    
                                    { prontuarios[0]?.ativo == "1" ? 
                                        <input type="checkbox" name="simativ" id="simativ" disabled checked  />
                                    : <input type="checkbox" name="simativ" id="simativ" disabled/>
                                    }
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">                                 
                                    { prontuarios[0]?.ativo == "0" ? 
                                        <input type="checkbox" name="naoativ" id="naoativ" disabled checked  />
                                    : <input type="checkbox" name="naoativ" id="naoativ" disabled/>
                                    }
                                    <p className="sexo-op"> Não </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={salvar}>Salvar</button> */}
                </form>


            </div>

            <div className="questionario">
                AAAAAAAAAAAAAA
            </div>
        </div>
    );
}