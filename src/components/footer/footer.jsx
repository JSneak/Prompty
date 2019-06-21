import React, { Component } from 'react'
import { MuiThemeProvider, Link, Typography } from '@material-ui/core'

import themes from '../../themes'

import './footer.css'

import AgencyContext from '../../context/agency-context'

class Footer extends Component {
    static contextType = AgencyContext
    state = {}
    render() {
        const { agencyId, agencyInfo } = this.context;
        return (
            <React.Fragment>
            <footer style={{position: "relative", top: "100vh+10px", bottom:0,width:"100%"}}>
                <div>
                    <MuiThemeProvider theme={themes.colorTheme}>
                        <Link href="https://www.uniqueinsuranceco.com/DiamondWeb/pdf/PrivacyPolicy.pdf" target="_blank" >Privacy</Link>{'\u00A0'}{'\u00A0'}
                        <Link href= {`mailto:${agencyInfo.email_address}`}>Help</Link>{'\u00A0'}{'\u00A0'}
                        <Link href= {`/${agencyId}`}>Home</Link>{'\u00A0'}{'\u00A0'}
                        <Link href= {agencyInfo.pnq_agency_link}>Agent</Link>{'\u00A0'}{'\u00A0'}
                        <Link href= {agencyInfo.pnq_agency_license}>License</Link>
                    </MuiThemeProvider>
                </div>
                <Typography style={{ display: 'inline-block', paddingBottom: "1vh" }}>
                    Powered by Stonegate Insurance Managers ©2019.
                </Typography>
            </footer>
            </React.Fragment>
        )
    }
}

export default Footer
