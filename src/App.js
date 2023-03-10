import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1,2,3].map(function(){
    return '123'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <div className="list">
        <h4>{글제목[1]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}
        <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{ 
              setTitle(i);
              setModal(!modal);}
              }>{글제목[i]} 
              <span onClick={(e)=>{ e.stopPropagation();
              let copy = [...따봉]
              copy[i]+=1
              따봉변경(copy)}}>👍</span>{따봉[i]}
              
              <b/> <button onClick={(e)=>{ e.stopPropagation();
                글제목.splice(i,1);
                let newTitle=[...글제목];
                글제목변경(newTitle);
              }}>삭제</button>
              </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{입력값변경(e.target.value); 
        console.log(입력값)}}></input>
        <button onClick={()=>{
          글제목.push(입력값);
          글제목변경(글제목);
        }}>추가</button>

      {
        (modal==true) ? <Modal
        글제목={글제목} 글제목변경={글제목변경} title={title}
        /> : null 
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background: props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;
