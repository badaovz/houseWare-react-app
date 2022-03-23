import React from 'react'
import {follows} from '../utils/constants';

function Footer() {
  return (
    <div className='container'>
        <div className='footer'>
            <div className='footer__info'>
                <h3 className='footer__title'>Infomation</h3>
                <p>Web by ***nguyen</p>
                <p>Code for fun</p>
                <p>Fun no code</p>
            </div>
            <div className='footer__contact'>
                <h3 className='footer__title'>My Contact</h3>
                <p><h5>SDT:</h5> 0989 *** 807</p>
                <p><h5>Email:</h5> d******endnv@gmail.com</p>
                <p><h5>Address:</h5> *** phung ***</p>
            </div>
            <div className='footer__follows'>
                <h3 className='footer__title'>Follows</h3>
                {
                    follows.map(follow => {
                        let {id, icon, text, url} = follow;
                        return (
                            <a href={url} key={id}><span>{icon}</span> {text}</a>
                        )
                    })
                }
            </div>
        </div>
        <p className='footer__public'>© 2022 <span>ComfySlothAll</span> rights reserved</p>
    </div>
  )
}

export default Footer