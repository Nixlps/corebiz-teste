import {useState} from 'react';

import './Searchbar.scss';
import Search from '../../../assets/icons/search.svg';

function Searchbar(){

    const [query, setQuery] = useState('');

    return(
        <div className="searchbar">
            <input type="text" placeholder="O que está procurando?" onChange={e => setQuery(e.target.value)}/>
            <Search/> {/* Quando clicar no ícone de search, ir pra página de busca em construção com a query de busca */}
        </div>
    )
}

export default Searchbar;