import React,{useState} from 'react'

export default function Hero() {
    const[heros,setHero]=useStaste([
        {name:"alluarjun",age:"48",movie:"arya",pic:"https://www.thestatesman.com/wp-content/uploads/2024/04/Happy-birthday-Allu-Arjun.jpg"},
        {name:"prabhash",age:"49",movie:"bhahubali",pic:"https://i.pinimg.com/474x/08/c9/f3/08c9f3ff07f3a6ec8dcc05ecc16f3c97.jpg"},
    ])
  return (
    <div>
      <DisplayHero myHeros={heros}/>
    </div>
  )
}
