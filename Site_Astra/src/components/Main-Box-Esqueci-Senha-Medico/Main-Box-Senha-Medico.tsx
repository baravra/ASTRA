import { Link } from "react-router-dom";
import { User, LockKey, Key } from "phosphor-react";
import './Main-box-Senha-Medico.css'
import { FormEvent } from "react";
import axios from "axios";
import { render } from "react-dom";
import Sucesso from "../Modal-Sucesso-Senha/Modal-Senha";


export default function EsqueciSenha() {

    async function esqueciSenha(event: FormEvent) {

        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.user || !data.senhanova || !data.confirmsenha) {
            alert('Preencha todos os campos')
            return
        }

        if (data.senhanova !== data.confirmsenha) {
            alert('Senhas não conferem')
            return
        }

        try {
            await axios.patch(`http://localhost:44/atualizar`, {
                "name": data.user,
                "password": data.senhanova
            })

            alert('Senha alterada com sucesso')

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
                <h1 className='singin-text'> Redefinir Senha</h1>
                <form onSubmit={esqueciSenha}>
                    <div className='dados-box-senha'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='input' placeholder='Usuário ou CPF ' />
                    </div>
                    <div className='dados-box-senha'>
                    <Key size={32} className='icone' />
                        <input type="password" name="codigo" id="codigo" className='input' placeholder='Código' />
                    </div>
                    <div className='dados-box-senha'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senhanova" id="senhanova" className='input' placeholder='Senha Nova' />
                    </div>
                    <div className='dados-box-senha'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="confirmsenha" id="confirmsenha" className='input' placeholder='Confirmação da Senha Nova' />
                    </div>

                    <div className="box-button">
                        {/* <Link to='/Inicio' className='acessar' id="acessar"> Acessar </Link> */}
                        <button className='acessar-senha' id="acessar"> Alterar Senha </button>
                    </div>
                </form>
                
            </div>   
        </div>
    )
}