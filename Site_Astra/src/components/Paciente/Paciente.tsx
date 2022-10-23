import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import './Paciente.css';
import InputMask from "react-input-mask";

export default function Paciente() {


    var paciente = {
        convenio: "Particular",
        numeroProntuario: 123456789,
        dataAbertura: "12/12/2021",
        nome: "Caroline Fereira Rocha",
        dataNascimento: "12/08/1986",
        idade: 42,
        sexo: "F",
        endereco: "Rua Padre Feijó - 1570 - Alto Vera Cruz",
        telefone1: "(31) 989756324",
        telefone2: "(31) 34567895",
        email: "carolzinha@gmail.com",
        contatoEmergencia: "(31) 989756324",
        escolaridade: "Pós-graduação",
        ocupacao: "Advogada",
        alergia: "Paracetamol",
        lastconsulta: 12,
        finalizarconsulta: "Finalizar Consulta"
    }

    function salvar() {
        console.log("Salvando")
    }



    return (
        <div className="box-paciente">
            <div className="perfil">
                <div className="perfil-infos">
                    <div>
                        <img src="https://media.discordapp.net/attachments/818657895776387074/1033149971479924807/image_183.png" alt="" className="img-perfil" />
                    </div>
                    <div className="dados">
                        <p className="nome"> {paciente.nome}</p>
                        <div className="linha-pac">
                            <p className="idade"> {paciente.idade} anos</p>
                            <div className="box-convenio">
                                <div className="conv"> CONVÊNIO</div>
                                <div className="enio"> {paciente.convenio}</div>
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
                        <div className="but-fun finalizar"> {paciente.finalizarconsulta} </div>
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
                                <input type="text" name="numpront" id="numpront" className="campo-input" required />
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Data de Abertura:</p>
                            <div className="campo-box-input">
                                <input type="text" name="databer" id="databer" className="campo-input" required />
                            </div>
                        </div>
                    </div>
                    <div className="full">
                        <div className="campo-box">
                            <p className="campo-text"> Nome Completo:</p>
                            <div className="campo-box-input">
                                <input type="text" name="nome" id="nome" className="campo-input " required />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Data de Nascimento:</p>
                            <div className="campo-box-input">
                                <input type="date" name="nascimento" id="nascimento" className="campo-input" required />
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Data de Abertura:</p>
                            <div className="campo-box-input">
                                <div className="sexo">
                                    <input type="checkbox" name="feminino" id="feminino" />
                                    <p className="sexo-op"> Feminino </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="masculino" id="masculino" />
                                    <p className="sexo-op"> Masculino </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="nbinare" id="nbinare" />
                                    <p className="sexo-op"> Não Binare </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="line top">
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone 1:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999" name="tel1" id="tel1" required className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone 2:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999" name="tel2" id="tel2" required className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Email:</p>
                            <div className="campo-box-input">
                                <input type="email" name="tel2" id="tel2" required className="campo-input" />
                            </div>
                        </div>
                        <div className="campo-box umquarto">
                            <p className="campo-text"> Telefone Emergência:</p>
                            <div className="campo-box-input">
                                <InputMask mask="(99)99999-9999" name="telemer" id="telemer" required className="campo-input" />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Escolaridade:</p>
                            <div className="campo-box-input">
                                <input type="text" name="escolaridade" id="escolaridade" className="campo-input" required />
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Ocupação:</p>
                            <div className="campo-box-input">
                                <input type="text" name="escolaridade" id="escolaridade" className="campo-input" required />
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
                                    <input type="checkbox" name="intelectual" id="intelectual" />
                                    <p className="sexo-op"> Intelectual </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="isual" id="visual" />
                                    <p className="sexo-op"> Visual </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="auditiva" id="auditiva" />
                                    <p className="sexo-op"> Auditiva </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="auditiva" id="auditiva" />
                                    <p className="sexo-op"> Fisica </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="auditiva" id="auditiva" />
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
                                    <input type="checkbox" name="feminino" id="feminino" />
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="masculino" id="masculino" />
                                    <p className="sexo-op"> Não </p>
                                </div>
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Quais?</p>
                            <div className="campo-box-input">
                                <input type="text" name="databer" id="databer" className="campo-input" required />
                            </div>
                        </div>
                    </div>
                    <div className="line top">
                        <div className="campo-box metade">
                            <p className="campo-text"> Consome Bebida Acólica?</p>
                            <div className="campo-box-input">
                                <div className="sexo">
                                    <input type="checkbox" name="naobebida" id="naobebida" />
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="simbebida" id="simbebida" />
                                    <p className="sexo-op"> Não </p>
                                </div>
                            </div>
                        </div>
                        <div className="campo-box metade">
                            <p className="campo-text"> Pratica Atividade Física?</p>
                            <div className="campo-box-input">
                                <div className="sexo">
                                    <input type="checkbox" name="simativ" id="simativ" />
                                    <p className="sexo-op"> Sim </p>
                                </div>
                                <div className="sexo">
                                    <input type="checkbox" name="naoativ" id="naoativ" />
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