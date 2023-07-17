import React from 'react'
import social from './images/social.png'
import './Social.css'
import facebook from './images/facebook.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter2 from './images/twitter2.png'

export default function Social() {
    return (
        <div className='socialapp'>
            <h1>Visit us on</h1>
            <div className='apps'>
                <img src={facebook} />
                <img src={insta} />
                <img src={linkedin} />
                <img src={twitter2} />
                

            </div>
        </div>
    )
}

