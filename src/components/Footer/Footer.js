import './Footer.scss';
import Email from '../../assets/icons/email.svg';
import Headset from '../../assets/icons/headset.svg';
import Logo from '../../assets/images/logo-branco.svg';
import Vtex from '../../assets/images/vtex.svg';

function Footer(){
    return(
        <footer>
            <div className='container-padding container-footer'>
                <div className="adress">
                    <h6> Localização <span></span> </h6>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 <span></span> Alphavile SP <span></span> brasil@corebiz.ag <span></span> +55 11 3090 1039</p>
                </div>
                <div className="contact">
                    <div className="email"> <Email/> <span>Entre em contato</span> </div>
                
                    <div className="consultant"> <Headset/> <span>Consultor online</span> </div>
                </div>
                <div className="approval">
                    <div className="corebiz">
                        <span>Created by</span>
                        <Logo/>
                    </div>
                    <div className="vtex">
                        <span>Powered by</span>
                        <Vtex/>
                    </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;