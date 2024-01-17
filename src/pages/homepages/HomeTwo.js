import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerTwo from '../../components/banner/BannerTwo';
import HomeTwoService from '../../components/home-two/HomeTwoService';
import AboutFour from '../../components/about/AboutFour';
import HomeTwoCourses from '../../components/home-two/HomeTwoCourses';
import HomeTwoEvents from '../../components/home-two/HomeTwoEvents';
import HomeTwoTestimonial from '../../components/home-two/HomeTwoTestimonial';
import AboutOne from '../../components/about/AboutOne';
import CallToActionOne from '../../components/cta/CallToActionOne';
import HomeTwoBlog from '../../components/home-two/HomeTwoBlog';
import FooterOne from '../../common/footer/FooterOne';

const HomeTwo = () => {
    return (
        <>
            <SEO title="Home" />

            <HeaderTwo styles="header-transparent header-style-2" />

            <BannerTwo />
            
            <HomeTwoService />
            
            <AboutFour />

            {/* <HomeTwoCourses /> */}

            {/* <HomeTwoEvents /> */}
            

            {/* <AboutOne wrapperClass="edu-section-gapBottom" /> */}
            <AboutOne />
            
            <HomeTwoTestimonial />

            {/* <CallToActionOne /> */}

            {/* <HomeTwoBlog /> */}

            <FooterOne />
        </>
    )
}

export default HomeTwo;