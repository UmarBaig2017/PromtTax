import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from "./components/Home"
import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>

                    <Route exact path="/" component={Home} />
                  

                </div>
            </Router>
        )
    }
}

export default Routers;