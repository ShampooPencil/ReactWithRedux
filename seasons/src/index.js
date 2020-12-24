import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    constructor(props) {
        super(props)//i think its just reference from parent..constructor(props)

        this.state = { lat: null } //default null(updated just put a random numb)

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })

                //We did not!! because it is straight to state but should
                // be changing state using setState
                // The only time you can do that is setting a state originally
                // inside the this.state's object above(right under super(props))
                //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
                //this.state.lat = position.coords.latitude//basically dont change state without using setState
            },
            (err) => console.log(err)
        )
    }
    render() {
        return <div>Latitude: {this.state.lat} </div>
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
