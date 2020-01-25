import React, { Component } from 'react'
import person from "./images/person_1.jpg"
import persontwo from "./images/person_3.jpg"
import personthree from "./images/person_3.jpg"
import personfour from "./images/person_4.jpg"
export default class Clietnt extends Component {
    render() {
        return (
            <div>
            <section class="ftco-section testimony-section">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-8 text-center heading-section ftco-animate">
                        <h2 class="mb-4">Our Clients Says</h2>
                        <p>Separated they live in. A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country</p>
                    </div>
                </div>
                <div class="row ftco-animate justify-content-center">
                    <div class="col-md-12">
                        <div class="carousel-testimony owl-carousel">
                            <div class="item">
                                <div class="testimony-wrap d-flex">
                                    <div class="user-img" style={{ backgroundImage: `url(${person})` }}>
                                    </div>
                                    <div class="text pl-4">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="icon-quote-left"></i>
                                        </span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                                        <p class="name">Racky Henderson</p>
                                        <span class="position">Father</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap d-flex">
                                    <div class="user-img" style={{ backgroundImage: `url(${persontwo})` }}>
                                    </div>
                                    <div class="text pl-4">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="icon-quote-left"></i>
                                        </span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                                        <p class="name">Henry Dee</p>
                                        <span class="position">Businesswoman</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap d-flex">
                                    <div class="user-img" style={{ backgroundImage: `url(${personthree})` }}>
                                    </div>
                                    <div class="text pl-4">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="icon-quote-left"></i>
                                        </span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                                        <p class="name">Mark Huff</p>
                                        <span class="position">Businesswoman</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap d-flex">
                                    <div class="user-img" style={{ backgroundImage: `url(${personfour})` }}>
                                    </div>
                                    <div class="text pl-4">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="icon-quote-left"></i>
                                        </span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                                        <p class="name">Rodel Golez</p>
                                        <span class="position">Businesswoman</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap d-flex">
                                    <div class="user-img" style={{ backgroundImage: `url(${person})` }}>
                                    </div>
                                    <div class="text pl-4">
                                        <span class="quote d-flex align-items-center justify-content-center">
                                            <i class="icon-quote-left"></i>
                                        </span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                                        <p class="name">Ken Bosh</p>
                                        <span class="position">Businesswoman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            </div>
        )
    }
}
