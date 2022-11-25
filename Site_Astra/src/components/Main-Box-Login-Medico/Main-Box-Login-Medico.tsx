import { Link } from "react-router-dom";
import { Route } from "react-router";
import { User, LockKey } from "phosphor-react";
import './Main-box-Login-Medico.css'
import axios from "axios";
import { FormEvent } from "react";


export default function MedicoLogin() {
    localStorage.clear()

    async function loginMedico(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.user || !data.senha) {
            alert('Preencha todos os campos')
            return
        }

        try {
            const response = await axios.post(`http://localhost:44/loginMedico`, {
                "usuario": data.user,
                "senha": data.senha
            })

            localStorage.setItem('medico', (data.user).toString())
            localStorage.setItem('medicoId', (response.data[0].id).toString())

            const win: Window = window;
            win.location = "/Home-Medico";
        
        } catch (error) {
            console.log(error)
            alert("Erro ao encontrar usuário!")
        }
    }

    return (
        <div className="box-main">
            <div className="login-medico-box">
                <div className="box-image">
                    <img src="./logo.png" alt="Logo" className="logo" />
                </div>
                <h1 className='singin-text'> Entrar</h1>
                <form onSubmit={loginMedico} className="formsMedic">
                    <div className='dados-box'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='input' placeholder='Usuário ou CPF ' />
                    </div>

                    <div className='dados-box'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senha" id="senha" className='input' placeholder='Senha' />
                    </div>

                    <div className="opcoes-em-linha">
                        <div className="conectado-box">
                            <input type="checkbox" name="conectado" id="conectado" className='conectado' />
                            <h4 className='text-options'> Manter-me Conectado</h4>
                        </div>
                        <div className="esqueci">
                        <Link to='/Esqueci-Senha-Medico' id="acessarsenha" className='text-options' >  Esqueci minha senha </Link>
                        </div>
                    </div>
                    <div className="box-button">
                        <button className='acessar' id="acessar">  Acessar  </button>
                    </div>
                </form>
                
            </div>   
        </div>
    )
}