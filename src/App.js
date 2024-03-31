/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);  //모달 스위치 역할
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

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
        <h4 onClick={()=>{
          count++;
          console.log(count);
          if(count/2==0){ 
            setModal(false);
          }else{
            setModal(true);
          }
          }}>{ title[2] }</h4>
        <p>2월 19일 발행</p>
      </div>

    <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
     </div>
  )
}

export default App;
