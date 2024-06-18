import React, { useState } from 'react'

export default function List() {
    const [employees, setEmployees] = useState([
        {
            name: "bhargavi",
            city: "chilamakuru",
            gender: "female",
            age: "21"
        },
        {
            name: "Navitha",
            city: "cilamakuru",
            gender: "female",
            age: "17"
        }
    ])
    return (
        <div>
            {
                employees.map((emp) => (
                    <div>
                        <p>Name:{emp.name}</p>
                        <p>City:{emp.city}</p>
                        <p> Year:{emp.gender}</p>
                        <p> age:{emp.age}</p>
                    </div>
                ))
            }
        </div>

  )
  
}
