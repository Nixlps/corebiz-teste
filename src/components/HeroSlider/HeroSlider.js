import Slider from "react-slick";

import './HeroSlider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wave from '../../assets/images/wave.png';

import banner from '../../assets/images/banner.png';

function HeroSlider(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    // Criar um arquivo separado para cadastrar os textos e imagens e gerar o carrossel automaticamente

    return(
        <Slider {...settings} style={{ marginTop: '30px'}}>
            <div className="hero-item">
                <img className="black-wave" src={wave} alt="black-wave" />
                <h1>Olá, o que você está buscando? <span>Criar ou migrar seu e-commerce?</span></h1>
                <div style={{ backgroundImage: `url(${banner})`}}></div>
            </div>

            <div className="hero-item">
                <img className="black-wave" src={wave} alt="black-wave" />
                <h1>Lorem ipsum dolor sit amet. <span>Consectetur adipiscing elit</span> </h1>
                <div style={{ backgroundImage: `url(${banner})`}}></div>
            </div>

            <div className="hero-item">
                <img className="black-wave" src={wave} alt="black-wave" />
                <h1>Sed ut perspiciatis unde omnis iste natus error sit. <span>Voluptatem accusantium</span></h1>
                <div style={{ backgroundImage: `url(${banner})`}}></div>
            </div>

            <div className="hero-item">
                <img className="black-wave" src={wave} alt="black-wave" />
                <h1>Sed ut perspiciatis unde omnis iste natus error sit. <span>Voluptatem accusantium</span></h1>
                <div style={{ backgroundImage: `url(${banner})`}}></div>
            </div>
        </Slider>

        
    )
}

export default HeroSlider