import React from 'react'
import "./Posts.scss"
import { posts } from '../../assets/profileData'
const Posts = () => {
    return (
        <div className='container3'>
            <div className="top">
                <div className="count">{posts.length} Posts</div>
                <div className="empty"></div>
            </div>
            {posts.map((item, index) => {
                return (
                    <div className="postview">
                        <div className="postheading">{item.heading}</div>
                        <div className="postcontent">{item.content}</div>
                        <div className='by'>
                            <div className="name">{item.by}</div>
                            <div className="time">{item.time}</div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default Posts
