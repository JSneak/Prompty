import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { Button } from '@material-ui/core'

class Start extends Component {

    render() {
        return (
            <React.Fragment>
            <div id="form">
                <h1>Hi! Let's get you set up.</h1>
                <textarea id="input" placeholder="Enter your speech here..." defaultValue="Testing one two three. What do you do when they come for you? Hello, my name is Sean Kim and I am a senior in High School. Being in San Francisco is really awesome because it's warm."></textarea>
                <Button variant="contained" color="primary" onClick={() => {this.handleSubmit()}}>Set stuff up</Button>
            </div>
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
