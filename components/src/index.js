import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail' //do not have use .js in the end
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const Testing = () => {
    //So this time, we are making ApprovalCard tags opening and closing
    // and also putting CommentDetail components inside...but now CommentDetail
    // is an props.children and ApprovalCard(i am guessing) a parent now. 
    // That is how it works.
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    userComment="Nice job on the post"
                    userImg={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:57PM"
                    userComment="Great job on the post"
                    userImg={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 12:05AM"
                    userComment="Good job on the post"
                    userImg={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<Testing />, document.querySelector('#root'))