import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react'
import './Post.css';
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAlt } from '@material-ui/icons';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}> {name[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAlt} title='Like' color="grey"/>
                <InputOption Icon={ChatOutlined} title='Comment' color="grey"/>
                <InputOption Icon={ShareOutlined} title='Share' color="grey"/>
                <InputOption Icon={SendOutlined} title='Send' color="grey"/>
                

            </div>
        </div>
    )

}
)

export default Post;
