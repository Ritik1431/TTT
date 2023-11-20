import React from 'react'
import back from './../../assets/back.jpg'
import front from './../../assets/front.jpg'
import { MdCheckCircle } from 'react-icons/md';
import { MdDiamond } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { FiThumbsUp } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { GiWrappedHeart } from 'react-icons/gi';
import './Profile.scss'
import profileData from  '../../assets/profileData.js'

const Profile = () => {

  return (
    <div className='container2'>
      <div className="back">
        <img src={back} alt="" />
      </div>
      <div className="front">
        <div className="front-image"><img src={front} alt="" /> </div>
        <div className="info">
          <div className='name'>{profileData.name} <span><MdDiamond /></span> <span><MdCheckCircle /></span></div>
          <div className="foll">
            <div className="followers">
              <div className='followers-box' >{profileData.followers}</div>
              <div className='followers-text' >Followers</div>
            </div>
            <div className="following">
              <div className='following-box' >{profileData.following}</div>
              <div className='following-text' >Following</div>
            </div>
          </div>
        </div>

      </div>

      <div className="details">
        <div className="pos">{profileData.position }</div>
        <div className="link">{profileData.instalink}</div>
        <div className="icons">
          <div className="star"><AiOutlineStar />{profileData.star}</div>
          <div className="thumb"><FiThumbsUp /> {profileData.likes}</div>
          <div className="eye"><ImEye /> {profileData.views}</div>
          <div className="heart"><GiWrappedHeart />{profileData.heart}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
