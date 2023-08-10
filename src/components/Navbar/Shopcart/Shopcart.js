import './Shopcart.scss';
import Cart from '../../../assets/icons/cart.svg';

function Shopcart(){

    var shopcartCounter = 0;

    return(
        <div className="shopcart">
            <Cart />
            <span className="shopcart-counter">{shopcartCounter}</span>
        </div>
    )
}

export default Shopcart;

