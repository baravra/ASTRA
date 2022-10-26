
import './Modal-Em-Desenvolvimento.css'

export default function ModalEmDesenvolvimento() {

    return (
        <div className="modal fade" id="ExemploModalCentralizado" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-body corpo-modal">

                        <img src="aviso.png" alt="" className='imagem-constru'/>
                        FUNCIONALIDADE EM DESENVOLVIMENTO
                    </div>
                    <div className="modal-footer rodapemodal">
                        <button type="button" className="btn btn-secondary botaook" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

