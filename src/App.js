import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect } from 'react-router-dom'
// import Header from './components/header/header'
import Main from './components/main/main'
// import Footer from './components/footer/footer'
import RoutingForm from '../src/views/routingForm';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        {<BrowserRouter>
          <Redirect from = {`/`} to = {`/start`}></Redirect>
          <Route path="/" render = {() =>
            <React.Fragment>
              {/* <Header ></Header> */}
              <Main ></Main>
              {/* <Footer ></Footer> */}
            </React.Fragment>
          }></Route>
        </BrowserRouter>}
      </React.Fragment>
      );
  }

  componentDidMount = () => {

  }

}

export default App;
