import React from 'react'
import "./about.css"
import profilepic from "../../assets/profilepic.jpg"


export const AboutMe = () => {
  return (
    <div className='aboutmecontainer'>
       
        <div className='imagecontainer'>
           <h1>about me</h1> 
            <img src={profilepic} alt="" />
        </div>
        <div className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur eligendi voluptatum eius distinctio accusantium facilis, non provident consectetur harum dolor saepe dolores sit voluptatibus quos aspernatur. Inventore, nemo pariatur.</p>
        </div>
    </div>
  )
}
