import React from 'react'

const ApprovalCard = (props) => {
    console.log(props.children)
    return (
        <div className="ui card">
            <div className="content">
                {/* basically passing a child component back here(<CommentDetail/>)
                inside the \/props when react runs */}
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">
                        Approve
                </div>
                    <div className="ui basic red button">
                        Reject
                </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard