import React from 'react'
import "./about.css"
import profilepic from "../../assets/srcn.jpg"


export const AboutMe = () => {
  return (
    <div className='aboutmecontainer'>
       
        <div className='imagecontainer'>
           <h1>About me</h1> 
            <img src={profilepic} alt="" />
        </div>
        <div className='content'>
            <p>I am an Industrial engineer who run his own food wholesaler company currently, I am planning to make a career changing soon end I will be completed my Front-End Web developer bootcamp soon. I am planning to add my previous knowledge and experience on to my new career .</p>
        </div>
    </div>
  )
}
