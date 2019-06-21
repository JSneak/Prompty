import React from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import RoutingForm from '../src/views/routingForm';

function App() {
  return (
    <React.Fragment>
      {<BrowserRouter>
        <Redirect from = {`/`} to = {`/start`}></Redirect>
        <Route path="/" render = {() =>
          <React.Fragment>

            <RoutingForm></RoutingForm>

          </React.Fragment>
        }></Route>
      </BrowserRouter>}
    </React.Fragment>
    );
}

export default App;
