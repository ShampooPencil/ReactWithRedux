import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    // constructor(props) {
    //     super(props)//i think its just reference from parent..constructor(props)

    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     } //default null(updated just put a random numb)
    //also, when we update states, we are just changing them but 

    state = { lat: null, errorMessage: '' }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )

    }

    render() {
        console.log(this.state.lat)
        if (this.state.errorMessage && !this.state.lat) {
            return <div><h1>ERROR: {this.state.errorMessage}</h1></div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            console.log(!this.state.errorMessage)
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Loading!</div>
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
