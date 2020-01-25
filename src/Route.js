import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from "./components/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/services" component={Services} />
                  

                </div>
            </Router>
        )
    }
}

export default Routers;