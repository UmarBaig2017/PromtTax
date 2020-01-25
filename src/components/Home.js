import React, { Component } from 'react'
import Header from "./Header/Header"
import Homie from "./Header"
import Footer from "./Footer.js/Footer"

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
