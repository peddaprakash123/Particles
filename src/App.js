import React from 'react';

import "./App.css"
import Particle from './Components/Particle';


const user={
  title:"What is tsParticles",
  description:"TsParticles is a spiritual successor of particles.js, an older library of similar functionality. The improvements include the use of TypeScript, first-party integrations with leading frameworks, and some new features. Other than that, the library is backward-compatible with particles.js — all configuration options are the same.The library uses HTML Canvas to create backgrounds that are far more advanced than just dots floating on the screen — some examples include particle masks for underlying images, making for a nice reveal effect, or polygon masks for organizing particles within a vector shape. You can also use custom graphics for the particles, apply custom animations, manage effects triggered by different user actions, and so much more!Overall, the library is incredibly versatile and configurable despite using just a single config object. Additionally, TypeScript typings and dedicated integrations for not only React, Vue, and Angular but also frameworks like Svelte and Solid make for a great development experience.",
  subtitle:"Creating interactive backgrounds",
  para:"To show how to use tsParticles, we will explore a few unique, interactive backgrounds. This should give you a good view of what’s possible and get you to know some of the config options.",
  subtitle1:"Setup",
  para1:"We’ll be using React and the official tsParticles React component for this demo. The following commands set up a React Vite template, install the necessary dependencies, and run the development server so that you’re ready to go in just a few seconds.",
  subtitle2:"Setup instructions"
}


function App() {
  
  function myfun() {
    alert('Successfully visit your background.👍')
  }


  return (
    <>
    <Particle />

      <div className='container'>
        <h1>{user.title}</h1>
        <p>{user.description}</p>
        <h2>{user.subtitle}</h2>
        <p>{user.para}</p>
        <h2>{user.subtitle1}</h2>
        <p>{user.para1}</p>
        <h2>{user.subtitle2}</h2>
        <p>
          npm init vite@latest backgrounds --template react-ts<br></br>
          cd backgrounds<br></br>
          npm install react-tsparticles<br></br>
          npm run dev 
          </p>
        <button className='btn' type='text' onClick={myfun}>visit</button>
      </div>
     </>
  );
}

export default App;
