import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core';
import AvatarIcon from '../personIcon/personIcon';
// import Logo from '../personIcon/3.jpg';
// import Stonegate from '../header/stonegate.png'
import AgencyContext from '../../context/agency-context'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: 0,
        backgroundColor: "#fff"
    },
    toolbarText: {
        // color: "#fff",
        paddingLeft: "5rem",
        [theme.breakpoints.down('780')]: {
            paddingLeft: "1rem"
          },
    }
})

class Header extends Component {
    static contextType = AgencyContext;
    state = {}

    render() 
    {
        const {classes} = this.props;
        const { agencyInfo } = this.context

        if (agencyInfo === null) {
            return null
        }

        return (
            <div className = {classes.root}>
                <AppBar position="static">
                    <Toolbar className = {classes.toolbar} style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <Typography className = {classes.toolbarText}>Agency Name: {agencyInfo.commercial_name1}</Typography>
                            <Typography className = {classes.toolbarText}>Agency Address: {agencyInfo.display_address}</Typography>
                            <Typography className = {classes.toolbarText}>Agency Telephone: {agencyInfo.phone_number}</Typography>
                        </div>
                        {agencyInfo.pnq_agency_logo &&
                            <img src = {agencyInfo.pnq_agency_logo} alt = "logo"></img>
                        }
                        <AvatarIcon></AvatarIcon>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
