import { Link } from "react-router-dom";
import { User, LockKey } from "phosphor-react";
import './Main-box-Login.css'
import axios from "axios";
import { FormEvent } from "react";


export default function MainBox() {

    async function loginCliente(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.user || !data.senha) {
            alert('Preencha todos os campos')
            return
        }

        try {
            const response = await axios.post(`http://localhost:44/loginPaciente`, {
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
        <div className="main-box">
            
            <div className="login-box">
                <div className="box-image">
                    <img src="./logo.png" alt="Logo" className="logo" />
                </div>
                <h1 className='singin-text'> Entrar</h1>
                <form onSubmit={loginCliente} className="formsMedic">
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
                        <Link to='/Esqueci-Senha' id="acessar" className='text-options esqueci' >  Esqueci minha senha </Link>
                        </div>
                    </div>
                    <div className="box-button">
                        {/* <Link to='/Inicio' className='acessar' id="acessar"> Acessar </Link> */}
                        <button className='entrar' id="acessar"> Acessar </button>
                        <div className="criar"> Não possui conta? <Link to='/Cadastrar' id="acessar" className='text-options' > <span> Cadastre-se.</span></Link></div>
                    </div>
                </form>
                
            </div>  
            <div className="imagem-login">
                
            </div>
        </div>
    )
}