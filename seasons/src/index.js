import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    constructor(props) {
        super(props)//i think its just reference from parent..constructor(props)

        this.state = {
            lat: null,
            errorMessage: ''
        } //default null(updated just put a random numb)
        //also, when we update states, we are just changing them but 
        //*NOT REMOVING/DELETING THEM
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
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat} </div>
        }
        return <div>Loading!</div>

        // return (
        //     <div>
        //         <b>
        //             {this.state.errorMessage ? (
        //                 <b>Error: {this.state.errorMessage}</b>) : (
        //                     <b>Latitude: {this.state.lat} </b>
        //                 )}
        //         </b>
        //     </div>
        // )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
