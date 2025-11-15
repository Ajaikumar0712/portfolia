import React, { useState } from 'react'
// import MagicBento from './MagicBento'
import LightRays from './lib/LightRays';
import Header from './Header';
import TextType from './lib/TextType';


const Mode = () => {




  return (

    <>
      <Header />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays relative z-10"
        />
        <TextType
          text="I AM DEVELOPER"
          as="h1"
          className="text-4xl font-bold text-center text-white absolute top-75% left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
        />


      </div>
    </>
  );
}

export default Mode;