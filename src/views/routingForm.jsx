import React, { Component } from 'react'

import { withRouter } from 'react-router'
import {Switch, Route} from "react-router-dom"

import EnterSpeech from '../views/enter/enter'
import ReadSpeech from '../views/read/read'
import SpeechData from  '../views/data/data'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview("/start");

class routingForm extends Component {    

    state = {
        // Form Control:
        step: 1
    }

    render() {                
        const values = this.state

        return (
            <React.Fragment>
                <Switch>
                    <Route path={`/start`} render={() =>
                        <EnterSpeech values={values} nextStep={this.nextStep} setValue={this.setValue} />
                    }></Route>
                    <Route path={`/read`} render={() =>
                        <ReadSpeech values={values} nextStep={this.nextStep} setValue={this.setValue} />
                    }></Route>
                    <Route path={'/data'} render={() =>
                        <SpeechData values={values} nextStep={this.nextStep} setValue={this.setValue} />
                    }></Route>
                </Switch>
            </React.Fragment>
        )
    }

    nextStep = () => {
        this.setState(prevState => {
            return {
                step: prevState.step + 1,
            }
        })
    }
    getValue = (input) => {
        return this.state[input];
    }
   
    setValue = (input, value) => {
        this.setState({[input]: value})
    }

}



export default withRouter(routingForm);
