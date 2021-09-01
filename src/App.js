import logo from './logo.svg';
import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './App.css';
import 'react-credit-cards/es/styles-compiled.css'

function App() {

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState(''); //"react-credit-card" needs for styling and animation


  return (
    <div className="App">

      <form>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />

        <input


          type='tel'
          name='number'
          placeholder='Card Number'
          value={number}
          maxLength="16"
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.value)}
        />


        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.value)}
        />


        <input
          type='tel'
          name='expiry'
          placeholder='Expiry MM/YY'
          value={expiry}
          maxLength="5"
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.value)}
        />


        <input
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          maxLength="3"
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.value)}
        />


      </form>

    </div>
  );
}

export default App;
