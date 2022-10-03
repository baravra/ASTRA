import { Link } from "react-router-dom";
import { User, LockKey } from "phosphor-react";
import './Main-box-Login-Medico.css'
import axios from "axios";
import { FormEvent } from "react";


export default function MedicoLogin() {
    async function loginMedico(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.user || !data.senha) {
            alert('Preencha todos os campos')
            return
        }

        try {
            const response = await axios.post(`http://localhost:44/login`, {
                "usuario": data.user,
                "senha": data.senha
            })

            console.log(response.data[0].id)
            alert('Login realizado com sucesso')

        } catch (error) {
            console.log(error)
            alert("Erro ao encontrar usuário!")
        }
    }

    return (
        <div className="box-main">
            <div className="info">
                <h1 className='title1'> Seja bem vindo a nossa página de Login!</h1>
                <h1 className='title2'> Para continuar com o login você precisa ter contratado nossos serviços para acessar usando um código de matrícula que somente nos disponibilizamos!</h1>
            </div>
            <div className="login">
                <h1 className='singin'> Entrar</h1>
                <form onSubmit={loginMedico}>
                    <div className='box-dados'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='user' placeholder='Usuário ou CPF ' />
                    </div>

                    <div className='box-dados top'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senha" id="senha" className='user' placeholder='Senha' />
                    </div>

                    <div className="opcoes">
                        <div className="conectado-box">
                            <input type="checkbox" name="conectado" id="conectado" className='conectado' />
                            <h4 className='text-options'> Manter-me Conectado</h4>
                        </div>
                        <div className="esqueci">
                        <Link to='/Esqueci-Senha' id="acessar" className='text-options' >  Esqueci minha senha </Link>
                        </div>
                    </div>
                    <div className="buton">
                        {/* <Link to='/Inicio' className='acessar' id="acessar"> Acessar </Link> */}
                        <button className='acessar' id="acessar"> Acessar </button>
                    </div>
                </form>
                
              
            </div>  
        </div>
    )
}