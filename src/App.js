import { useEffect, useState } from "react";


function App() {
  const [value, setValue]=useState('')
  const [number, setNumber]=useState(0)
  const [changes, setChanges]=useState('default')

  var Array =["button","console","change","align"]
  var Array =["express","require","listen","bodyParser","product","indexOf","delete","splice","success","mongoose","connect","schema","params","product","findOneAndUpdate","controllers","models","mongoUri","exports","config","exec","status","remove"]

  function increment(){
    setNumber(number+1)
    console.log(Array[number]) 
  }
  
  function dicrement(){
    setNumber(number-1)
    console.log(Array[number]) 
  }

  useEffect(()=>{
    if(value===Array[number]){
      setChanges("True")
    }
    if(value!=Array[number]){
      setChanges("default")
    }

  },[value])

  return (
    <div style={{width: "1000px", margin:"0 auto"}} className="App">

      <h1>{number}</h1>
      <h1>{changes}</h1>
      <input 
      style={{fontSize:"50px"}}
      type="text"
      onChange={event=>setValue(event.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={dicrement}>dicrement</button>
      <h3 style={{textAlign: "end",paddingTop:"400px"}}>{Array[number]}</h3>

    </div>
  );
}

export default App;
