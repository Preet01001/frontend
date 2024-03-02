import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[data,setdata]= useState([])

  function get(e){
    e.preventDefault();
    fetch("https://backend1-j3av.onrender.com/")
  .then((res)=>{
    res.json().then((dat)=>{
   setdata(dat)
   console.log(dat)
    })
  })
  }
  


  return (
    <>
      {
        data.map((items)=>(
          <h1>{items.name}</h1>
        ))
      }
      <button onClick={get}>get data</button>
    </>
  )
}

export default App
