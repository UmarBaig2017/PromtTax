import React, { Component } from 'react'
import Header from "./Header/Header"
import Footer from "./Footer.js/Footer"
import Homie from "./Header"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Homie />
                <Footer />

            </div>
        )
    }
}
