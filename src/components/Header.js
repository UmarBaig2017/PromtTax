import React, { Component } from 'react'
import background from "./images/bg_1.jpg"
import backgroundtwo from "./images/bg_2.jpg"
import about from "./images/about.jpg"
import backgroundthree from "./images/bg_3.jpg"
import project from "./images/project-2.jpg"
import projecttwo from "./images/project-1.jpg"
import projectthree from "./images/project-3.jpg"
import projectfour from "./images/project-4.jpg"
import projectfive from "./images/project-5.jpg"
import projectsix from "./images/project-6.jpg"
import projectseven from "./images/project-7.jpg"
import projecteight from "./images/project-8.jpg"
import backgroundfive from "./images/bg_5.jpg"
import image from "./images/image_1.jpg"
import imagetwo from "./images/image_2.jpg"
import imagethree from "./images/image_3.jpg"
import Client from "./Clietnt"
export default class Homie extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel">
                    <div className="slider-item" style={{ backgroundImage: `url(${background})` }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-start"
                                data-scrollax-parent="true">
                                <div className="col-md-7 ftco-animate">
                                    <span className="subheading">Welcome to Consolve</span>
                                    <h1 className="mb-4">We Are The Best Consulting Agency</h1>
                                    <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Our Services</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item" style={{ backgroundImage: `url(${backgroundtwo})` }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-start"
                                data-scrollax-parent="true">
                                <div className="col-md-7 ftco-animate">
                                    <span className="subheading">Todays Talent, Tommorow Success</span>
                                    <h1 className="mb-4">We Help to Grow Your Business</h1>
                                    <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Our Services</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-5 order-md-last wrap-about align-items-stretch">
                                <div className="wrap-about-border ftco-animate">
                                    <div className="img" style={{ backgroundImage: `url(${about})` }}></div>
                                    <div className="text">
                                        <h3>Read Our Success Story for Inspiration</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.</p>
                                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from
                                            it would have been rewritten a thousand times and everything that was left from its
                                origin would be the word.</p>
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Contact us</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 wrap-about pr-md-4 ftco-animate">
                                <h2 className="mb-4">Our Main Features</h2>
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                                    would have been rewritten a thousand times and everything that was left from its origin would be
                        the word.</p>
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <div className="services active text-center">
                                            <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                                className="flaticon-collaboration"></span></div>
                                            <div className="text media-body">
                                                <h3>Organization</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                        <div className="services text-center">
                                            <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                                className="flaticon-analysis"></span></div>
                                            <div className="text media-body">
                                                <h3>Risk Analysis</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="services text-center">
                                            <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                                className="flaticon-search-engine"></span></div>
                                            <div className="text media-body">
                                                <h3>Marketing Strategy</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                        <div className="services text-center">
                                            <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                                className="flaticon-handshake"></span></div>
                                            <div className="text media-body">
                                                <h3>Capital Market</h3>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: `url(${backgroundthree})` }} >
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-10 text-center heading-section heading-section-white ftco-animate">
                                <h2 className="mb-0">You Always Get the Best Guidance</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-counter" id="section-counter">
                    <div className="container">
                        <div className="row d-md-flex align-items-center justify-content-center">
                            <div className="wrapper">
                                <div className="row d-md-flex align-items-center">
                                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="icon"><span className="flaticon-doctor"></span></div>
                                            <div className="text">
                                                <strong className="number" data-number="705">0</strong>
                                                <span>Projects Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="icon"><span className="flaticon-doctor"></span></div>
                                            <div className="text">
                                                <strong className="number" data-number="809">0</strong>
                                                <span>Satisfied Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="icon"><span className="flaticon-doctor"></span></div>
                                            <div className="text">
                                                <strong className="number" data-number="335">0</strong>
                                                <span>Awwards Received</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18">
                                            <div className="icon"><span className="flaticon-doctor"></span></div>
                                            <div className="text">
                                                <strong className="number" data-number="35">0</strong>
                                                <span>Years of Experienced</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-2">
                            <div className="col-md-8 text-center heading-section ftco-animate">
                                <h2 className="mb-4">Our Best Services</h2>
                                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the
						necessary regelialia. It is a paradisematic country</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 noborder-left text-center ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-analysis"></span></div>
                                    <div className="text media-body">
                                        <h3>Business Analysis</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 text-center ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-business"></span></div>
                                    <div className="text media-body">
                                        <h3>Business Consulting</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 text-center ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-insurance"></span></div>
                                    <div className="text media-body">
                                        <h3>Business Insurance</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 noborder-left noborder-bottom text-center ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-money"></span></div>
                                    <div className="text media-body">
                                        <h3>Global Investigation</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 text-center noborder-bottom ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-rating"></span></div>
                                    <div className="text media-body">
                                        <h3>Audit &amp; Evaluation</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <div className="services-2 text-center noborder-bottom ftco-animate">
                                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span
                                        className="flaticon-search-engine"></span></div>
                                    <div className="text media-body">
                                        <h3>Marketing Strategy</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white ftco-animate">
                                <h2 className="mb-3 mb-md-0">You Always Get the Best Guidance</h2>
                            </div>
                            <div className="col-lg-3 col-md-4 ftco-animate">
                                <p className="mb-0"><a href="#" className="btn btn-white py-3 px-4">Request Quote</a></p>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="ftco-section ftco-no-pb">
                    <div class="container-fluid px-0">
                        <div class="row no-gutters justify-content-center mb-5">
                            <div class="col-md-7 text-center heading-section ftco-animate">
                                <h2 class="mb-4">Our Recent Projects</h2>
                                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the
                                necessary regelialia. It is a paradisematic country</p>
                                <p></p>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${project})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projecttwo})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projectthree})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projectfour})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projectfive})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projectsix})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projectseven})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="project img ftco-animate d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: `url(${projecteight})` }}>
                                    <div class="overlay"></div>
                                    <a href="#" class="btn-site d-flex align-items-center justify-content-center"><span
                                        class="icon-subdirectory_arrow_right"></span></a>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
                    style={{ backgroundImage: `url(${backgroundfive})` }}
                    data-stellar-background-ratio="0.5">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-md-6 py-5 px-md-5">
                                <div class="py-md-5">
                                    <div class="heading-section heading-section-white ftco-animate mb-5">
                                        <h2 class="mb-4">Request A Quote</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
								there live the blind texts.</p>
                                    </div>
                                    <form action="#" class="appointment-form ftco-animate">
                                        <div class="d-md-flex">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="First Name" />
                                            </div>
                                            <div class="form-group ml-md-4">
                                                <input type="text" class="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="d-md-flex">
                                            <div class="form-group">
                                                <div class="form-field">
                                                    <div class="select-wrap">
                                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" class="form-control">
                                                            <option value="">Select Guidance</option>
                                                            <option value="">Finance</option>
                                                            <option value="">Business</option>
                                                            <option value="">Auto Loan</option>
                                                            <option value="">Real Estate</option>
                                                            <option value="">Other Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group ml-md-4">
                                                <input type="text" class="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div class="d-md-flex">
                                            <div class="form-group">
                                                <textarea name="" id="" cols="30" rows="2" class="form-control"
                                                    placeholder="Message"></textarea>
                                            </div>
                                            <div class="form-group ml-md-4">
                                                <input type="submit" value="Request A Quote" class="btn btn-white py-3 px-4" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ftco-section bg-light">
                    <div class="container">
                        <div class="row justify-content-center mb-5 pb-2">
                            <div class="col-md-8 text-center heading-section ftco-animate">
                                <h2 class="mb-4"><span>Recent</span> Blog</h2>
                                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the
                                necessary regelialia. It is a paradisematic country</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 ftco-animate">
                                <div class="blog-entry">
                                    <a href="blog-single.html" class="block-20 d-flex align-items-end"
                                        style={{ backgroundImage: `url(${image})` }}>
                                        <div class="meta-date text-center p-2">
                                            <span class="day">26</span>
                                            <span class="mos">June</span>
                                            <span class="yr">2019</span>
                                        </div>
                                    </a>
                                    <div class="text bg-white p-4">
                                        <h3 class="heading"><a href="#">Finance And Legal Working Streams Occur Throughout</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                        <div class="d-flex align-items-center mt-4">
                                            <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>
                                            <p class="ml-auto mb-0">
                                                <a href="#" class="mr-2">Admin</a>
                                                <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 ftco-animate">
                                <div class="blog-entry">
                                    <a href="blog-single.html" class="block-20 d-flex align-items-end"
                                        style={{ backgroundImage: `url(${imagetwo})` }}>
                                        <div class="meta-date text-center p-2">
                                            <span class="day">26</span>
                                            <span class="mos">June</span>
                                            <span class="yr">2019</span>
                                        </div>
                                    </a>
                                    <div class="text bg-white p-4">
                                        <h3 class="heading"><a href="#">Finance And Legal Working Streams Occur Throughout</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                        <div class="d-flex align-items-center mt-4">
                                            <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>
                                            <p class="ml-auto mb-0">
                                                <a href="#" class="mr-2">Admin</a>
                                                <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 ftco-animate">
                                <div class="blog-entry">
                                    <a href="blog-single.html" class="block-20 d-flex align-items-end"
                                        style={{ backgroundImage: `url(${imagethree})` }}>
                                        <div class="meta-date text-center p-2">
                                            <span class="day">26</span>
                                            <span class="mos">June</span>
                                            <span class="yr">2019</span>
                                        </div>
                                    </a>
                                    <div class="text bg-white p-4">
                                        <h3 class="heading"><a href="#">Finance And Legal Working Streams Occur Throughout</a></h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                        <div class="d-flex align-items-center mt-4">
                                            <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>
                                            <p class="ml-auto mb-0">
                                                <a href="#" class="mr-2">Admin</a>
                                                <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


              <Client/>





            </div>
        )
    }
}
