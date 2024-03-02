import React from 'react'
import {Link,Outlet} from "react-router-dom"
import "./nav.css"


export const Root = () => {
  return (
    <div className='navcontainer'>
        <ul className='nav'>
            <li>
                <Link className='navitem' to="/">
                home                
                </Link>
            </li>
            <li>
                <Link className='navitem' to="/work">
                Work                
                </Link>
            </li>

        </ul>
        <Outlet/>
    </div>
  )
}
