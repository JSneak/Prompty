import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Next extends Component {

    render() {
        return (
            <React.Fragment >
                <div>
                    <a onClick={() => {this.handleSubmit()}} className="center-me">The End</a>
                </div>
            </React.Fragment>
        )
    }

    handleSubmit = () => {
        this.props.history.push(`data`)
        this.props.nextStep()
    }
    
    componentDidMount = () => {
    }

}

export default withRouter(Next)

