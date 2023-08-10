import '../public/reset.scss';
import '../public/common.scss';

import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider'

import './App.scss';

function App(){
    return (
        <>
            <Navbar />
            <HeroSlider />
        </>
    );
}

export default App;