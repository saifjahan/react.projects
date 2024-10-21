import React, {useState} from 'react'


export default function Button1() {
    const [count, setCount] = useState(0);

function HandleClick(){
    setCount(count + 1);
}


  return (
    <>
    
    <button onClick={HandleClick}>click here</button>
    you have cliked {count}
    </>
   
  )
}
