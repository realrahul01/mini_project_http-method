import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
const [list, setList] = useState([])
const [text,setText] = useState('')

 const clickHandler = ()=>{
    let val = {name:text}
   setText('')
   const resObj = {
     method : 'POST',
     body : JSON.stringify(val)
   }
   fetch('https://jsonplaceholder.typicode.com/users',resObj)
     .then((res)=>res.json())
     .then((data)=>{
     console.log(data)
   setList([...list,val])
   })
 }   

   
useEffect(()=>{
  console.log('Making a get request')
  fetch('https://jsonplaceholder.typicode.com/users',{method : 'GET'})
  .then((res)=>res.json())
  .then((data)=>{
    setList(data)
    console.log( 'Recived data:',  data)
  })
},[])

  const listData = list.map((item,index)=>(
    <div style={{border:'1px solid grey',marginTop:'10px',padding:'10px'}} key={index}>{item.name}</div>
  ))

  
  return (
    <main>
    <h1>Hello User</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter new user..."/>
      <button onClick={clickHandler}>ADD</button>
      {listData}
    </main>
  );
}

export default App;