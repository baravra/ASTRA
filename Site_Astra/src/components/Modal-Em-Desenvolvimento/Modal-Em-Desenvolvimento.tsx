
import './Modal-Em-Desenvolvimento.css'

export default function ModalEmDesenvolvimento() {

    function fecharmodal(){
        document.getElementById("modal-desenv")!.style.display = "none"
    }

    return (

        <div id="modal-desenv" >
            <div className="corpo-modal">
                <img src="aviso.png" alt="" className='imagem-constru' />
                <p className="aviso">Funcionalidade em Desenvolvimento</p>
            </div>
            <div className="rodapemodal">
                <button className='botaook' onClick={fecharmodal}>OK</button>
            </div>
        </div>
    )
}

