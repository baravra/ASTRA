import { Link } from "react-router-dom";
import { User, LockKey } from "phosphor-react";
import './Main-box-Senha.css'
import { FormEvent } from "react";
import axios from "axios";
import { render } from "react-dom";
import Sucesso from "../Modal-Sucesso-Senha/Modal-Senha";


export default function EsqueciSenha() {

    async function esqueciSenha(event: FormEvent){

        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if(!data.user || !data.senhanova || !data.confirmsenha){
            alert('Preencha todos os campos')
            return
        }

        if(data.senhanova !== data.confirmsenha){
            alert('Senhas não conferem')
            return
        }

        try {
            await axios.patch(`http://localhost:44/atualizar` , {
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
        <div className="box-main-senha">
            <div className="info">
                <h1 className='title1'> Recuperação de senha </h1>
                <h1 className='title2'> Lembrando que assim que haver a mudança você perderá a conexão com sua conta, retornará após acessar sua conta com a nova senha!</h1>
            </div>
            <div className="login">
                <h1 className='singin'> Redefinir Senha </h1>
                <form onSubmit={esqueciSenha}>
                    <div className='box-dados'>
                        <User size={32} className='icone' />
                        <input type="text" name="user" id="user" className='user' placeholder='Usuário ou CPF ' />
                    </div>

                    <div className='box-dados top'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="senhanova" id="senhanova" className='user' placeholder='Senha Nova' />
                    </div>
                    <div className='box-dados top'>
                        <LockKey size={32} className='icone' />
                        <input type="password" name="confirmsenha" id="confirmsenha" className='user' placeholder='Confirmação da Senha Nova' />
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