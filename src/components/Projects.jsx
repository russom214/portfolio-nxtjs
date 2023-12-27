import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";

// import NetflixImg from '@/assets/projects/netflix.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        {/* <h2 className="py-4">What I&apos;ve Built</h2> */}
        <div className="grid md:grid-cols-2 gap-8 m-6">
          <div>
            <h2>Netflix App</h2>
            <p className="m-6">
            I built this application in React JS and is hosted on GitHub pages.
            It features user authentication with firebase as well as the
            firestore cloud storage database. It is pulling movie
            data from an the IMDB movie API and displaying different categories.
          </p>
          <div className="flex">
            <Link href="github.com/russom214/netflix-reactjs.git">
            <button className='px-8 py-2 m-8 mt-4 mr-8'>Code</button>
            </Link>
            <Link href="https://netflix-reactjs-f2e51.web.app">
            <button className='px-8 py-2 m-8 mt-4 mr-8'>Live Demo</button>
            </Link>
          </div>

          </div>
          <div>
            <ProjectItem
              title="Netflix App"
              backgroundImg="/../assets/projects/netflix.jpg"
              projectUrl="/netflix"
              tech="React JS"
            />
          </div>

          {/* <div>
          <ProjectItem
              title='Restaurant Booking '
              backgroundImg="/../assets/projects/little-lemon.png"
              projectUrl='/property'
            tech='React JS'/>
          </div>
          <div>
            <p>Restourant Booking System</p>
          </div>

          <div>
            <p>Crypto App</p>
          </div>
          <div>
          <ProjectItem
              title='Crypto App'
              backgroundImg="/../assets/projects/crypto.jpg"
              projectUrl='/crypto'
              tech='React JS'
  
            />
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
