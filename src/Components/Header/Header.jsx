import React from 'react'
import tt from './../../assets/ttt.png'
import './Header.scss'
const Header = () => {
    return (
        <div className="container1">
            <div className='header'>
                <img src={tt} alt="This is image" />
                <div className='sp1'>|</div>
                <div className='sp2'>STORIES</div>
                <div className="button"><button >Courses</button></div>
            </div>
        </div>

    )
}

export default Header
