import { useState } from 'react'

function App() {
  
  return (
    <>
        <Rendering></Rendering>        
        <Header title="my name is ratnadeep"></Header>
    </>
  )
}

function Rendering(){
  const [title, setTitle] = useState("my name is ratnadeep");
  const [btn, btnData] = useState(0);

  function updateContent(){
    setTitle("my name is " + parseInt(Math.random()*10));
  }

  function updateButton(){
    btnData(btn+1);
        
  }
  
  return(
    <>
        <button onClick={updateContent}>Click me to change the DOM title</button>
        <Header title={title}></Header>
        <button onClick={updateButton}>Click count is {btn}</button>
    </>
  )
}

function Header({title}){
    return(
      <div>
        {title}
      </div>
    )
}


export default App
