import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'; // Import Transition from headless UI
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import profilePic from '../assets/profile/pic.jpg';

import Work from './Work';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Education from './Education';

const burger = <FontAwesomeIcon icon={faBars}/>

export default function Landing() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the width as needed
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount to set initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);


    const handleDownload = () => {
        // Path to the PDF file
        const pdfPath = '../../public/Resume_Marcellana_John_Patrick.pdf';

        // Fetch the PDF file
        fetch(pdfPath)
            .then(response => response.blob())
            .then(blob => {
                // Create a temporary URL for the PDF blob
                const url = window.URL.createObjectURL(blob);

                // Create a temporary <a> element to trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Resume_Marcellana_John_Patrick.pdf'; // Set the desired file name
                document.body.appendChild(a);

                // Simulate a click on the <a> element to trigger the download
                a.click();

                // Clean up
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => console.error('Error fetching PDF:', error));
    };

    return (
        <div className='w-screen bg-gradient-to-r from-teal-950 to-teal-600 overflow-hidden'>
            <div className='h-screen'>
                <div id='home' className='items-center text-gray-50 px-5 py-6'>
                    {isSmallScreen ? (
                        <div className='flex justify-start montserrat ps-2'>
                            <button className='text-2xl sm:text-2xl md:text-3xl hover:text-teal-400 pe-10' onClick={() => setIsOpen(!isOpen)}>
                                {burger}
                            </button>
                        </div>
                    ) : (
                        <div className='flex md:gap-8 lg:gap-16 xl:gap-24 item-center montserrat justify-center'>
                            <button
                                className='block text-xl hover:text-teal-400 hover:bg-gray-50 p-2 rounded-xl'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('experience');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Experience
                            </button>
                            <button
                                className='block text-xl hover:text-teal-400 hover:bg-gray-50 p-2 rounded-xl'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('skills');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Skills
                            </button>
                            <button
                                className='block text-xl hover:text-teal-400 hover:bg-gray-50 p-2 rounded-xl'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('projects');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Projects
                            </button>
                            <button
                                className='block text-xl hover:text-teal-400 hover:bg-gray-50 p-2 rounded-xl'
                                onClick={() => {
                                    setIsOpen(false);
                                    handleDownload();
                                }}
                            >
                                Resume / CV
                            </button>
                            <button
                                className='block text-xl hover:text-teal-400 hover:bg-gray-50 p-2 rounded-xl'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('contact');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Contact
                            </button>
                        </div>
                    )}
                </div>
                {/* Responsive Navbar */}
                <Transition
                    show={isOpen}
                    enter='transition-opacity duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    {(ref) => (
                        <div ref={ref} className='absolute top-16 left-5 bg-teal-800 text-gray-50 rounded-md shadow-lg p-5'>
                            <button
                                className='block mb-3 text-md sm:text-lg md:text-xl hover:text-teal-400'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('experience');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Experience
                            </button>
                            <button
                                className='block mb-3 text-md sm:text-lg md:text-xl hover:text-teal-400'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('skills');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Skills
                            </button>
                            <button
                                className='block mb-3 text-md sm:text-lg md:text-xl hover:text-teal-400'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('projects');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Projects
                            </button>
                            <button
                                className='block mb-3 text-md sm:text-lg md:text-xl hover:text-teal-400'
                                onClick={() => {
                                    setIsOpen(false);
                                    handleDownload();
                                }}
                            >
                                Resume / CV
                            </button>
                            <button
                                className='block text-md sm:text-lg md:text-xl hover:text-teal-400'
                                onClick={() => {
                                    setIsOpen(false);
                                    const tellMeMoreElement = document.getElementById('contact');
                                    if (tellMeMoreElement) {
                                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Contact
                            </button>
                        </div>
                    )}
                </Transition>
                {/* Main Content */}
                <div className='space-y-10 bg-stone-50 w-screen h-5/6 text-gray-50 montserrat flex justify-center items-center fade-in'>
                    <div className='xs:px-12 sm:px-16 md:px-20 lg:px-24 xl:px-36 2xl:px-48 space-y-10'>
                        <div className="flex justify-center items-center">
                            <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full">
                                <img 
                                src={profilePic} 
                                alt="Avatar" 
                                className="w-full h-full object-cover object-top" 
                                />
                            </div>
                        </div>

                        <h1 className='text-5xl xs:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl 3xl:text-10xl leading-none text-center'>Hi, {"I'm"} John Patrick Marcellana</h1>
                        <h3 className='text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-center'>A Software Engineer</h3>
                    </div>
                </div>
            </div>

            <Work />

            <Education />

            <Skills />

            <Projects />

            <Contact />

        </div>
  )
}
