import React from 'react'
import "./Example.css"
import { useState } from "react"



const Example = () => {
    console.log("TEST")
    
    const [title, setTitle] = useState("Môj prvý title")
    





    // čisty javascript začiatok

    const vychodziePolie = ["David", "Hermiona", "Harry"]

    // const student1 = vychodziePolie[0]
    // const student2 = vychodziePolie[1]
    // const student3 = vychodziePolie[2]

        // DESTRUCTURING

        // const [student1, student2, student3] = vychodziePolie

        // console.log(student1)
        // console.log(student2)
        // console.log(student3)

    // čisty javascript koniec


  

    const buttonHandler = () => {
        setTitle("Novy text v titlu")
       
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={buttonHandler}>Zmeniť title</button>
        </div>
    )
}

export default Example