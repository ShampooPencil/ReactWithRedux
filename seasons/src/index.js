import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    constructor(props) {
        super(props)//i think its just reference from parent..constructor(props)

        this.state = {
            lat: null,
            errorMessage: ''
        } //default null(updated just put a random numb)
        //also, when we update states, we are just changing them but 
    }
    // state = { lat: null, errorMessage: '' }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )

    }

    /*****Helper Method...for example, put all of this in this method, and 
     and call it in render. In the render, there is <div class="border 5px
     ....you dont have to put that <div> styles in every single if else
     or in every condition..basically do the style only one time (below)*/
    renderContent() {
        console.log(this.state.lat)
        if (this.state.errorMessage && !this.state.lat) {
            return <div><h1>ERROR: {this.state.errorMessage}</h1></div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            console.log(!this.state.errorMessage)
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />
    }
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
