import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState("my name is ratnadeep");
  const [btn, btnData] = useState(0);

  function updateContent(){
    setTitle("my name is " + Math.random());
  }

  function updateButton(){
    btnData(btn+1);
        
  }
  
  return (
    <div>
        <button onClick={updateContent}>Click me to change the DOM title</button>
        <Header title={title}></Header>
        <Header title="my name is ratnadeep"></Header>
        <Header title="my name is ratnadeep"></Header>
        <Header title="my name is ratnadeep"></Header>
        <Header title="my name is ratnadeep"></Header>
        <Header title="my name is ratnadeep"></Header>
        <button onClick={updateButton}>Click count is {btn}</button>       
        
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
});


export default App
