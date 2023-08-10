import '../public/reset.scss';
import '../public/common.scss';

import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';

import './App.scss';


function App(){
    const [cartCounter,setCartCounter] = useState(0);
    
    function handleClickBuyBtn(){
        setCartCounter(cartCounter + 1)
    }

    return (
        <>
            <Navbar cartCounter={cartCounter}/>
            <HeroSlider />
            <ProductDisplay cartCounter={handleClickBuyBtn}/>
        </>
    );
}

export default App;