import React from 'react'
import "./Nav.css"

export default function Nav() {
    return (
        <div>
            <div className='Navbar'>
                <a href='Home'>Home</a>
                <a href='About Us'>About Us</a>
                <a href='Contact US'>Contact Us</a>
                <button type='submit'>Login</button>
                <button type='submit'>Register</button>
            </div>
            <div className='description'>
                <h1>Hello!</h1>
                <p>We help you to keep the track record on your important stuffs and give you the reminder, through emails. Your one stop solution for tracking your tasks in a organized manner. Add or remove behaviors in any way you want.</p>
                
            </div>
            <div className='add'>
                <button type='submit'>Add Your Reminders</button>
            </div>
        </div>
    )
}

