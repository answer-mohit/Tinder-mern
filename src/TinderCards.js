import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';   
import './TinderCards.css';
import axios from './axios';
function TinderCards() {
 const [people,setpeople]=useState([]);
 useEffect(()=>{
async function fetchData(){
    const req=await axios.get('/tinder/card');
    setpeople(req.data);
}
fetchData();
 },[]);
 console.log(people);
 const swiped=(direction,nameTodelete)=>{
     console.log('removing'+nameTodelete);
 }
 const outOfFrame=(name)=>{
console.log("left the screen !"+name);
 };
    return (
        <div className="tindercards">
            {people.map((person)=>(
<TinderCard
className="swipe"
key={person.name}
preventSwipe={["up","down"]}
onSwipe={(dir)=>swiped(dir,person.name)}
onCardLeftScreen={()=>outOfFrame(person.name)} 
>
     <div style={{ backgroundImage: 'url(' + person.url + ')' ,borderRadius:"20px"}} className='card'>
              <h3>{person.name}</h3>
            </div>
</TinderCard>


            ))}
        </div>
    )
}

export default TinderCards
