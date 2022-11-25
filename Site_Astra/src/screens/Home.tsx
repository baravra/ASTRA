import { Link } from "react-router-dom";
import {
  FirstAidKit,
  Note,
  Timer,
  GameController,
  LightbulbFilament,
  DesktopTower,
  ChartLineUp,
  Brain,
  ListChecks,
  Alarm,
  Calendar,
  ChatText,
  Envelope,
  WhatsappLogo,
  InstagramLogo,
} from "phosphor-react";

import "../css/Home.css";
import logo from "../../public/logo.png";
import ImageFAQ from "../../public/faq.jpg";

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
              <a href="#" className="opt">
                Home
              </a>
              <a href="#OqueOferece" className="opt">
                O que oferecemos?{" "}
              </a>
              <a href="#SobreNos" className="opt">
                Sobre Nós
              </a>
              <a href="#Contatos" className="opt">
                Contatos
              </a>
              <a href="#FAQ " className="opt">
                FAQ
              </a>
            </div>

            <div className="box-opt">
              {" "}
              <Link to="/Login-Medico" className="opt white">
                {" "}
                Área do Médico{" "}
              </Link>{" "}
            </div>
            <div className="box-opt">
              {" "}
              <Link to="/Login-Cliente" className="opt white">
                {" "}
                Área do Paciente{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="text-apresentation">
          <div className="line1">Em busca de agilidade e leveza</div>
          <div className="line2">para seu tratamento!</div>
        </div>
      </div>

      <div className="ofPaciente" id="OqueOferece">
        <div className="line">Oque oferecemos para os pacientes?</div>

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
            <div className="desc-funct">Agilidade em sua consulta</div>
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

      <div className="ofMedico" id="OqueOfereceMedico">
        <div className="line medic">Oque oferecemos para os nosso Médicos?</div>

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
            <div className="desc-funct-medic">Agilidade em suas consultas</div>
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
              Controle de sua agenda diária, mensal e anual de consultas e de
              seus pacientes
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
        <div className="titulosobre">Equipe Astra</div>

        <div className="equipdesc">
          Astra é formada por 3 integrantes Lara nossa Design e Marketing,
          Camilli nossa Desenvolvedora Front-end e CEO, e Bárbara nossa
          desenvolvedora Back-end. De um trabalho escolar para o mercado, não
          pesávamos que nosso projeto poderia sair de um simples projeto de
          escola, para um produto no mercado de trabalho, vimos que nossa ideia
          poderia ajudar médicos e pacientes portadores da doença do Câncer,
          onde existe uma carência muito grande de sistemas que agilize uma
          consulta, onde também ajudava na motivação dos pacientes. Portanto não
          podíamos deixar que nosso projeto fosse algo arquivado e sim algo que
          pudéssemos ajudar o mundo. Por isso a equipe Astra está empenhada a
          fazer o melhor a fins de ajudar e salvar vidas.
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
        <div className="formsFAQ">
          <h1>Tire sua Dúvida!</h1>
          <h3>
            A equipe Niké está a disposição para retirar qualquer dúvida, e
            abertos a sugestões, use este meio como meio para nos comunicar
            qualquer dúvida ou sugestão!
          </h3>
          <h3>
            No portal do Paciente você poderá acessar suas perguntas e as
            respostas que serão disponibilizadas por nossos médicos.
          </h3>

          <h2>Mande aqui :</h2>

          <form className="formFAQ">
            <textarea name="ask" id="aks"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="imgFAQ">
          <img src={ImageFAQ} alt="" className="imgFaq" />
        </div>
      </div>

      <div className="contateNos" id="Contatos">
        <h1>Entre em contato conosco!</h1>

        <div className="horarioAtendimento">
          <Timer size={30} color="#004B70" className="iconePeq" />
          <h2>Horário de atendimento :</h2>
        </div>
        <div className="horarioAtendimentoBox">
          Segunda a Sexta : 08:00 ás 18:00 - Sábado : 10:00 ás 15:00
        </div>

        <div className="boxesContacts">
          <div className="box-contato">
            <Envelope
              size={130}
              color="#004B70"
              weight="light"
              className="iconContatos"
            />
            <h1>Email</h1>
            <h2>
              Contate-nos diretamente <br />
              pelo email.
            </h2>
            <h3>nike.contacts@gmail.com</h3>
          </div>
          <div className="box-contato">
            <WhatsappLogo
              size={130}
              color="#004B70"
              weight="light"
              className="iconContatos"
            />
            <h1>WhatsApp</h1>
            <h2>
              Contate-nos diretamente
              <br /> pelo WhatsApp!
            </h2>
            <h3>(31) 9 8100-0577</h3>
          </div>
          <div className="box-contato">
            <InstagramLogo
              size={130}
              color="#004B70"
              weight="light"
              className="iconContatos"
            />
            <h1>Instagran</h1>
            <h2>
              Conheça o nosso Instagram!
              <br /> E nos siga para novidades!
            </h2>
            <h3>@astra.team_</h3>
          </div>
        </div>

        <div className="Rodape">
          <div className="logoRodape">
            <img src={logo} alt="" className="imgRodape" />
          </div>
          <div className="infosRodape">
            <div className="Menu-Links">
              <h1>Início</h1>
              <h2>
                <a href="#"> Home </a>
              </h2>
            </div>
            <div className="Menu-Links">
              <h1>Sobre Nós</h1>
              <h2>
                <a href="#OqueOfereceMedico"> O que oferecemos aos Médicos? </a>
              </h2>
              <h2>
                <a href="#OqueOferece"> O que oferecemos aos Pacientes? </a>
              </h2>
              <h2>
                <a href="#SobreNos"> Quem somos? </a>
              </h2>
            </div>
            <div className="Menu-Links">
              <h1>Suporte</h1>
              <h2>
                <a href="mailto:nike.contacts@gmail.com">Email</a>
              </h2>
              <h2>
                <a href="https://wa.me/5531981000577">WhatsApp</a>
              </h2>
              <h2>
                <a href="https://www.instagram.com/astra.team_/"> Instagram </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
