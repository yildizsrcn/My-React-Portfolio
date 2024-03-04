import React from 'react'
import {Link,Outlet} from "react-router-dom"
import "./nav.css"
import "./footer.css"


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
        <footer>
        <li>
        <a href="https://github.com/yildizsrcn" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br />
        <br />
        <a href="http://linkedin.com/in/yusuf-sercan-yildiz-37a943186" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <br />
        <a href="mailto:srcnyildiz@hotmail.com">Email</a>
        <br />
        <br />
        </li>
        </footer>
    </div>
  )
}