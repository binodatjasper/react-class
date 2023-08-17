import React from "react";
import OwlCarousel from 'react-owl-carousel';

import banner_image_1 from './../assets/images/banner_image_1.jpg';
import banner_image_2 from './../assets/images/banner_image_2.jpg';
import banner_image_3 from './../assets/images/banner_image_3.jpg';

export default function BannerSection() {
    const sliders = [
        {
            id: 1,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_1
        },
        {
            id: 2,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_2
        },
        {
            id: 3,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_3
        },
        {
            id: 1,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_1
        },
        {
            id: 2,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_2
        },
        {
            id: 3,
            title: 'Awesome React Class',
            slug: '/awesome-react-class',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae ipsa. Ipsam voluptates explicabo veniam inventore harum aut in deleniti modi officiis, non dolorum voluptatibus expedita. Veritatis illum officia atque?',
            thaumbnail: banner_image_3
        },
    ]
    return (
        <section className="banner">
            <OwlCarousel className='owl-theme' items={1} autoplay loop margin={10} nav>
                {
                    sliders.map((item, index) => {
                        return (
                            <div key={index} className='item'>
                                <img src={item.thaumbnail} alt={item.title} />
                                <div ></div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </section>
    )
}