import React from 'react'
import {fruits} from './Fruits'
import Button1 from './Button1';

const items =fruits.map(fruit=>
    <li key={fruit.id} style={{color:fruit.local? 'green' : 'red'}}>{fruit.name}{fruit.price}</li>

)

function MyButton(){
    
    function HandleClick(){
        alert ("you have clicked");
    }
    return(
        <button className="blue" onClick={HandleClick}>click here</button>
    )
}


    const user ={
    name: "Doctor rakib",
    imgUrl: "images/photo.jpg",
    imgSize: 100
}



export default function App() {
  return (
    <>
     <div>Welcome to my app</div>
     <MyButton></MyButton>
     <h1>{user.name}</h1>
     <img src={user.imgUrl} alt={user.name} style={{width: "300px"}}/>
     <hr/>
     <ul>{items}</ul>
     <Button1 />
   
    </>
   
  )
}
