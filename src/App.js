import React, { useState } from 'react'
import './calci.css'

function App() {
  const [val,setVal]=useState(" ")

  return (
    <div className="calci_Main">
      <span style={{display:"flex",alignItems:"center", justifyContent:"center",color:"white", fontSize:"19px",fontWeight:"700"}}>Calculator</span>
      <div className='calci_Body'>
        <form action="">
          <div className='calci_text'>
            <input value={val} />
          </div>
          <div>
            <input type="button" value="AC" onClick={e=>setVal(" ")}/>
            <input type="button" value="DC" onClick={e=>setVal(val.slice(0,-1))}/>
            <input type="button" value="." onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="/" onClick={e=>setVal(val+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="8" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="9" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="*" onClick={e=>setVal(val+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="5" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="6" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="+" onClick={e=>setVal(val+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="2" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="3" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="-" onClick={e=>setVal(val+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="0" onClick={e=>setVal(val+e.target.value)}/>
            <input type="button" value="=" className='calci_equalBtn' onClick={e=>setVal(eval(val))}/>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default App