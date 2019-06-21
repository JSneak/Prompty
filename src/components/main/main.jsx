import React, { Component } from 'react'

import RoutingForm from '../../views/routingForm'
import Grid from '@material-ui/core/Grid';

import "./main.css"

class Main extends Component {
    state = {}

    render() {
        return (
            <main>
                <Grid container justify="center" alignItems="center">
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <RoutingForm fetchAgencyInfo = {this.props.fetchAgencyInfo}></RoutingForm>
                    </div>
                </Grid>
            </main>
        )
    }
}

export default Main
