import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";
import { RiRadioButtonFill } from "react-icons/ri";

// import NetflixImg from '@/assets/projects/netflix.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>

        <div className="grid md:grid-cols-2 gap-8 m-6">
          <div>
            <h2>Netflix App</h2>
            <div className="col-span-4 md:col-span-1  py-4">
              <div className="flex justify-between col-span-2">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> IMDB API
                </p>
              </div>

              <p className="m-6">
                I built this application in React JS and is hosted on GitHub
                pages. It features user authentication with firebase as well as
                the firestore cloud storage database. It is pulling movie data
                from an the IMDB movie API and displaying different categories.
              </p>

              <div className="flex">
                <Link href="https://netflix-reactjs-f2e51.web.app">
                  <button className="px-8 py-2 m-8 mt-4 mr-8">Live Demo</button>
                </Link>
                <Link href="github.com/russom214/netflix-reactjs.git">
                  <button className="px-8 py-2 m-8 mt-4 mr-8">Code</button>
                </Link>
              </div>
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

          <div>
            <ProjectItem
              className=""
              title="OpenStream AI "
              backgroundImg="/../assets/projects/openstream.png"
              projectUrl="/property"
              tech="React JS"
            />
          </div>
          <div className="m-8 p-8">
            <h2>OpenStream AI</h2>
            <div className="m-4 flex justify-between col-span-2">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> LangChain
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenAI API
              </p>
            </div>
            <p className="m-6">
            OpenStream is a project within the LangChain ecosystem that seamlessly integrates various tools powered by OpenAI language models. This multifaceted platform offers a range of functionalities, including real-time streaming capabilities, efficient PDF conversion, and intelligent summarization.
            </p>
            <div className="flex">
              <Link href="https://netflix-reactjs-f2e51.web.app">
                <button className="px-8 py-2 m-8 mt-4 mr-8">Live Demo</button>
              </Link>
              <Link href="github.com/russom214/netflix-reactjs.git">
                <button className="px-8 py-2 m-8 mt-4 mr-8">Code</button>
              </Link>
            </div>
          </div>

          <div className="m-8 p-8">
            <h2>Little Lemon Restaurant</h2>
            <div className="m-4 flex justify-between col-span-2">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
            </div>
            <p className="m-6">
              This is my first UI/UX project I built it with Figma, React and JS
              as well. We created a functional booking system for the little
              lemon restaurant with fully pleged Wireframing and Prototyping
              concepts in Figma. I have the links for both source code and
              wireframes below.
            </p>
          </div>
          <div>
            <ProjectItem
              title="Little Lemon Restaurant "
              backgroundImg="/../assets/projects/little-lemon.png"
              projectUrl="/property"
              tech="React JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
