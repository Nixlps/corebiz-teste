import { useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductDisplay.scss';
import Star from '../../assets/icons/star.svg';
import { PRODUCTS_API_URL } from '../../constants';

function ProductDisplay(props){
    const [products, setProducts] = useState([]);

    function fetchProductsData(){
        fetch(PRODUCTS_API_URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProducts(data)
        })
    }

    useEffect(() => {
        fetchProductsData()
      }, [])

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        initialSlide: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                initialSlide: 2,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
        ]
    };

    return(
        <section className="container-padding">
            <div className="product-display">
                <h2>Mais vendidos <span></span></h2>
                    <Slider {...settings}>
                        {products.map(product => (
                            <div className='product' key={product.id}>
                                <div className="image"> <img src={product.image} alt={product.title} title={product.title} /> </div>
                                <div className="infos">
                                    <h4 className='title'>{product.title}</h4>
                                    <div className="rating-stars"> {product.rating.rate} <Star/> </div>
                                    <p className="rating-number"> {product.rating.count} avaliações </p>
                                    <p className="price"> por <span>R$ {String(product.price).replace('.',',')}</span> </p>
                                    <p className="alternate-price"> ou em 9x de <span>R$ {String((product.price/9).toFixed(2)).replace('.',',')}</span> </p>
                                    <div className="buy-btn" onClick={props.cartCounter}> Comprar </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        </section>
    )
}

export default ProductDisplay;