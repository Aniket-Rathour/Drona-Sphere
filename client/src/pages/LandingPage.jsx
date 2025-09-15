import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Example from '../components/ui/image-gallery';
import { HeroSection } from '../components/ui/artificial-hero';
import { HeroSection2 } from '../components/ui/animated-hero';
import AboutMe from '../components/ui/Aboutme';


const LandingPage = () => {
  
  

  return (

    <div className="flex flex-col">
        {/* header */}
        <HeroSection></HeroSection>

        {/* what we offer */}
        <div className="flex items-center py-15 ">
            <Example />
        </div>

        <HeroSection2></HeroSection2>

        <AboutMe></AboutMe>

    </div>

  );
};

export default LandingPage;
