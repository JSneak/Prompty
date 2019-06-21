import React, { Component } from 'react'
import { withRouter } from 'react-router'


class Start extends Component {

    render() {
        return (
            <React.Fragment>
            <body emotion="pos">
            <div id="form">
                <h1>Hi! Let's get you set up.</h1>
                <textarea id="input" placeholder="Enter your speech here..." value="Testing one two three. What do you do when they come for you? Hello, my name is Sean Kim and I am a senior in High School. Being in San Francisco is really awesome because it's warm."></textarea>
                <button id="ready">Set stuff up</button>
            </div>
            </body>
            </React.Fragment>
        )
    }

    handleSubmit = () => {
        this.props.history.push(`read`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}

export default withRouter(Start)
