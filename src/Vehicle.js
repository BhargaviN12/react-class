import React,{useState} from 'react'
import DisplayVehicle from './DisplayVehicle'

export default function Vehicle() {
    const[vehicles,setVehicle]=useState([
        {name:"tata",price:"200000",description:"car",pic:"https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png"},
        {name:"yamaha",price:"50000",description:"bike",pic:"https://stat.overdrive.in/wp-content/uploads/2019/01/Bikes-of-2019-2.jpg"},
        {name:"honda",price:"40000",description:"scooty",pic:"https://static.javatpoint.com/top10-technologies/images/top-10-scooty-in-india10.jpg"}
    ])
  return (
    <div>
      <DisplayVehicle myVehicles={vehicles}/>
    </div>
  )
}
