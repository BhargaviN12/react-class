import React from 'react'
import'./Vehicle.css'
export default function DisplayVehicle(Props) {
  return (
    <div  className='vehicle-parent'>
        {
            Props.myVehicles.map((vehicle)=>(
<div className='vehicle'>
    <p><b>Name:</b>{vehicle.name}</p>
    <p><b>Price</b>{vehicle.price}</p>
    <p><b>Description</b>{vehicle.description}</p>
    <img src={vehicle.pic} alt={vehicle.name} width="60%"/>
    </div>

            ))
        }
      
    </div>
  )
}
