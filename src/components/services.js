import React from "react";
import Slider from "react-slick";

import banner_image_1 from './../assets/images/banner_image_1.jpg';
import banner_image_2 from './../assets/images/banner_image_2.jpg';
import banner_image_3 from './../assets/images/banner_image_3.jpg';

export default function ServicesSection() {
    const sliderSettings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    const serviceSliders = [
        {
            thaumbnail: banner_image_1,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_2,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_3,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_1,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_2,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_3,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_1,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_2,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_3,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_1,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_2,
            title: 'Awesome React Class'
        },
        {
            thaumbnail: banner_image_3,
            title: 'Awesome React Class'
        },
    ]
    return (
        <section className="serivices">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                </div>
                <div className="section-content">
                    <Slider {...sliderSettings}>
                        {
                            serviceSliders.map((item, i) => {
                                return (
                                    <div key={i} className="item">
                                        <div className="serivices-item">
                                            <img src={item.thaumbnail} alt={i} />
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}