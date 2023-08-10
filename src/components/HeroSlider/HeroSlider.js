import Slider from "react-slick";

import './HeroSlider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wave from '../../assets/images/wave.png';
import content from './content'

function HeroSlider(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return(
        <Slider {...settings} style={{ marginTop: '30px'}}>
            {content.map(item => {
                return(
                    <div className="hero-item" key={item.id}>
                        <img className="black-wave" src={wave} alt="black-wave" />
                        <h1> {item.smalltext} <span> {item.bigtext} </span></h1>
                        <div style={{ backgroundImage: `url(${item.imgsrc})`}}></div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default HeroSlider