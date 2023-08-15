import React from "react";

import BannerSection from './../components/Banner';
import WelcomeSection from './../components/Welcome';
import ServicesSection from './../components/services';
import FreeEstimateSection from './../components/FreeEstaimate';
import TestimonialsSection from './../components/Testimonials';
import GallerySection from './../components/Gallery';

export default function HomePage() {
    return (
        <>
            <BannerSection />
            <WelcomeSection path="binod" myContent="Welcome Section" />
            <ServicesSection />
            <FreeEstimateSection />
            <TestimonialsSection />
            <GallerySection />
        </>
    )
}