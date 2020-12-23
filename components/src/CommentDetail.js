import React from 'react'
// import faker from 'faker'

const CommentDetail = (props) => {

    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt="avatar" src={props.userImg} />

            </a>
            <div className="content">
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.timeAgo}</span>
                </div>
                <div className='text'>{props.userComment}</div>
            </div>
        </div>
    )
};

//it is now(after using export) open for outside files for this component
export default CommentDetail;

