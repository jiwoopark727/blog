/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
        </div>
        <p>{ post }</p>
     </div>
  );
}

export default App;
