/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>

      <div className='list'>
        <span onClick={()=>{
          let copy = [...title];
          copy[0] = "여자코트추천";
          setTitle(copy);
        }}>🔄</span>
        
        <h4>{ title[0] } <span onClick={()=>{setGood(good+1)}}>👍</span>
         {good} </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>2월 19일 발행</p>
      </div>

    </div>
  );
}

export default App;
