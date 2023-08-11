import '../public/reset.scss';
import '../public/common.scss';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import NewsForm from './components/NewsForm/NewsForm';
import Footer from './components/Footer/Footer';

function App(){
    const [cartCounter,setCartCounter] = useState(0);
    
    function handleClickBuyBtn(){
        setCartCounter(cartCounter + 1);
    }
    
    useEffect(() => {
        const data = localStorage.getItem('MY_APP_STATE');
        if ( data !== null ) setCartCounter(JSON.parse(data));
      }, []);

    useEffect(() => {
        localStorage.setItem('MY_APP_STATE', JSON.stringify(cartCounter));
    }, [cartCounter])


    return (
        <>
            <Navbar cartCounter={cartCounter} />
            <HeroSlider />
            <ProductDisplay cartCounter={handleClickBuyBtn}/>
            <NewsForm />
            <Footer />
        </>
    );
}

export default App;