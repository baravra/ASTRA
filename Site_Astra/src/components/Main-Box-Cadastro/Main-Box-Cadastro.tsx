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
                "password": data.senhanova
            })
            alert('Cadastro realizado com sucesso')

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar!")
        }

    }

    return (
        <div className="box-main-cadastro">
            <div className="info">
                <h1 className='title1'> Seja bem vindo a nossa página de Cadastro! </h1>
                <h1 className='title2'>Lembrando que para a realização do Cadastro será necessário a liberação do cadastro com seu médico! </h1>
            </div>
            <div className="login">
                <h1 className='singin'> Cadastrar </h1>

                <form onSubmit={cadastrarCliente} >
                    <div className='box-dados'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='user' placeholder='Usuário ou CPF ' />
                    </div>

                    <div className='box-dados top'>
                        <Key size={32} className='icone' />
                        <input type="password" name="codigo" id="codigo" className='user' placeholder='Código' />
                    </div>

                    <div className='box-dados top'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senhanova" id="senhanova" className='user' placeholder='Senha' />
                    </div>
                    <div className='box-dados top'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="confirmsenha" id="confirmsenha" className='user' placeholder='Confirmação da Senha' />
                    </div>

                    <div className="buton">
                        {/* <Link to='/SistemaHome' className='acessar' id="acessar"> Criar Conta </Link> */}
                        <button className='acessar' id="acessar"> Criar Conta </button>
                    </div>
                </form>
              
            </div>  
        </div>
    )
}