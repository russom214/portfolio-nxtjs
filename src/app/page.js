import React from 'react';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main'
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects'
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
    <head>
      <title >Natnael | Front-end Developer</title>
    </head>

    <Navbar/>
    <Main/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>

    </>
  )
}

