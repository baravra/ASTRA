
import './Modal-Iniciar-Consulta.css'

export default function ModalIniciaConsulta() {

    function fecharmodal(){
        document.getElementById("modal-iniciar")!.style.display = "none"
    }

    return (

        <div id="modal-iniciar" >
            <div className="corpo-modal">
                <p className="aviso">Iniciar Consulta</p>
            </div>
            <div className="rodapemodal">
                <button className='botaook' onClick={fecharmodal}>OK</button>
            </div>
        </div>
    )
}

