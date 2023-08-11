import './Shopcart.scss';
import Cart from '../../../assets/icons/cart.svg';

function Shopcart(props){

    return(
        <div className="shopcart">
            <Cart />
            <span className="shopcart-counter">{props.cartCounter}</span>
        </div>
    )
}

export default Shopcart;

