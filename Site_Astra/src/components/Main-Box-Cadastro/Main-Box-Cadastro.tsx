import { Link } from "react-router-dom";
import { User, LockKey, Key } from "phosphor-react";
import './Main-box-Cadastro.css'
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";


export default function CadastrarCliente() {
    async function cadastrarCliente(event: FormEvent){
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if(!data.user || !data.codigo || !data.senhanova || !data.confirmsenha){
            alert('Preencha todos os campos')
            return
        }

        if(data.senhanova !== data.confirmsenha){
            alert('Senhas não conferem')
            return
        }

        try {
            await axios.post('http://localhost:44/usuarios', {
                "name": data.user,
                "password": data.senhanova,
                "medicoId": data.codigo
            })
            alert('Cadastro realizado com sucesso')

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar!")
        }

    }

    return (
        <div className="box-main-cadastro">
            <div className="login-box">
                <div className="box-image">
                    <img src="./logo.png" alt="Logo" className="logo" />
                </div>
                <h1 className='singin-text'> Cadastrar</h1>
                <form onSubmit={cadastrarCliente} className="formsSenha">
                    <div className='dados-box-cadastro'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='input' placeholder='Usuário ou CPF ' />
                    </div>

                    <div className='dados-box-cadastro'>
                        <Key size={32} className='icone' />
                        <input type="text" name="codigo" id="codigo" className='input' placeholder='Código' />
                    </div>

                    <div className='dados-box-cadastro'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senhanova" id="senhanova" className='input' placeholder='Senha' />
                    </div>
                    <div className='dados-box-cadastro'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="confirmsenha" id="confirmsenha" className='input' placeholder='Confirmação da Senha' />
                    </div>

                    <div className="box-button">
                        {/* <Link to='/SistemaHome' className='acessar' id="acessar"> Criar Conta </Link> */}
                        <button className='acessar-cadastro' id="acessar"> Criar Conta </button>
                    </div>
                </form>
                
            </div>  
            <div className="imagem">
                
            </div>
            
        
        </div>
    )
}