import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[data,setdata]= useState([])

  function get(e){
    e.preventDefault();
    fetch("http://localhost:4000/")
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
