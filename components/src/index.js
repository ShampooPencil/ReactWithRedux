import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail' //do not have use .js in the end

const Testing = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex" />
            <CommentDetail author="Jane" />
        </div>
    )
}

ReactDOM.render(<Testing />, document.querySelector('#root'))