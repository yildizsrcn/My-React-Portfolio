import React from 'react'
import {Link,Outlet} from "react-router-dom"
import "./nav.css"


export const Root = () => {
  return (
    <div className='navcontainer'>
        <ul className='nav'>
            <li>
                <Link className='navitem' to="/">
                Home                
                </Link>
            </li>
            <li>
                <Link className='navitem' to="/work">
                Work                
                </Link>
            </li>
            <li>
                <Link className='navitem' to="/contact">
                Contact                
                </Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}
