import React from 'react'

const Spinner = (props) => {
    return (

        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>

    )
}

// same thing as props.message || Loading... but more elagent(more readable)
Spinner.defaultProps = {
    message: 'Loading...'
}
export default Spinner