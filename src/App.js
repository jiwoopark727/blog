/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);  //모달 스위치 역할
  let [num, setNum] = useState(0);
  let [info, setInfo] = useState(['발마칸코트','현우동','코딩애플']);
  let [입력값, 입력값변경] = useState(''); //글제목 입력
  let [입력값2, 입력값변경2] = useState(''); //상세정보 입력
  let [입력값3, 입력값변경3] = useState(''); //날짜 입력
  let [date, setDate] = useState([17,18,19]);
  let now = new Date();

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

      {/* <div className='list'>
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
        <h4 onClick={()=>{ setModal(!modal) }}>{ title[2] }</h4>
        <p>2월 19일 발행</p>
      </div> */}

      { 
        title.map(function(a, i){
          return (
          <div className="list"  key={i}>
            <h4 onClick={()=>{ setNum(i);  setModal(true); }}>{ title[i] } 
            <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...good];
              copy[i]++;
              setGood(copy);
            }}>👍</span>
            {good[i]}</h4>
            <p>2월 {date[i]}일 발행</p>
            <button onClick={()=>{
              let copy = [...title];
              copy.splice(i,1);
              setTitle(copy);

              let copy2 = [...info];
              copy2.splice(i,1);
              setInfo(copy2);

              let copy3 = [...date];
              copy3.splice(i,1);
              setDate(copy3);
            }}>삭제</button>
          </div> 
          )
        }) 
      }

      <span>글제목입력</span>
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}></input>
      <span>상세정보입력</span>
      <input onChange={(e)=>{
        입력값변경2(e.target.value);
      }}></input>
      
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(입력값);
        입력값!='' ? setTitle(copy) : null

        let copy2 = [...info];
        copy2.unshift(입력값2);
        입력값!='' ? setInfo(copy2) : null

        let copy3 = [...good];
        copy3.unshift(0);
        입력값!='' ? setGood(copy3) : null

        let copy4 = [...date];
        copy4.unshift(now.getDate());
        입력값!='' ? setDate(copy4) : null
      }}
      >글발행</button>

      {
        modal == true 
        ? <Modal title={title} setTitle={setTitle} num={num} info={info}></Modal> : null 
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.title[props.num]}</h4>
      <p>2월{17+props.num}일</p>
      <p>{props.info[props.num]}</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0] = "여자코트추천";
        props.setTitle(copy);
      }}>글수정</button>
     </div>
  )
}

export default App;
