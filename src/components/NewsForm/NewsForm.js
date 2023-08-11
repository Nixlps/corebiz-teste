import { useState, useEffect } from 'react';

import './NewsForm.scss';
import { NEWSLETTER_API_ENDPOINT } from '../../constants';


function NewsForm(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [formMsg, setFormMsg] = useState('Participe de nossas news com promoções e novidades!')

    function formHandler(e){
        e.preventDefault();

        if(username === ''){
            setErrorName('Preencha com seu nome completo');
            return
        }

        setErrorName('');

        if(!email.includes('@','.')){
            setErrorEmail('Preencha com um e-mail válido');
            return
        }

        setErrorEmail('');

        const data = [email,username];

        fetch(NEWSLETTER_API_ENDPOINT, {
            method: 'POST', 
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => {
                if (response.status !== 200) {
                  throw new Error(response.statusText);
                }
                return response.json();
              })
            .then(() => {
                setFormMsg('Seu e-mail foi cadastrado com sucesso! A partir de agora você receberá as novidade e ofertas exclusivas.');
            })
        }


    return(
        <section className="newsletter container-padding" >
            <p>{formMsg}</p>
            <form className={`${formMsg != 'Participe de nossas news com promoções e novidades!' ? 'disable' : ''}`}>
                <div>
                    <input className={`${errorName != '' ? 'input-error' : ''}`} type="text" placeholder='Digite seu nome' onChange={e => setUsername(e.target.value)}/>
                    <span>{errorName}</span>
                </div>
                <div>
                    <input className={`${errorEmail != '' ? 'input-error' : ''}`} type="text" placeholder='Digite seu email' onChange={e => setEmail(e.target.value)}/>
                    <span>{errorEmail}</span>
                </div>
                <button type="button" onClick={e => formHandler(e)}>Eu quero!</button>
            </form>
        </section>
    )
}

export default NewsForm;