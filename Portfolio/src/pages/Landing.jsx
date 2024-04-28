import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'; // Import Transition from headless UI
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

import Work from './Work';

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
        <div className='w-screen bg-gradient-to-r from-teal-950 to-teal-600'>
            <div id='home' className='items-center text-gray-50 px-5 py-6'>
                {isSmallScreen ? (
                    <div className='flex justify-start montserrat ps-2'>
                        <button className='text-lg sm:text-lg md:text-xl hover:text-teal-400 pe-10' onClick={() => setIsOpen(!isOpen)}>
                            Menu
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-24 item-center montserrat justify-center'>
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
                    <div ref={ref} className='absolute top-16 right-5 bg-teal-950 text-gray-50 p-5 rounded-md shadow-lg'>
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
            <div className='space-y-10 py-20 bg-stone-50 w-screen text-gray-50 montserrat'>
                <div className='xs:px-12 sm:px-16 md:px-20 lg:px-24 xl:px-32 space-y-1 flex justify-center gap-20 items-center mb-20 px-20 py-24 px w-full'>
                    <div className='space-y-6 w-full bg-center bg-no-repeat bg-cover '>
                        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-10xl leading-none text-center'>Hi, I'm John Marcellana</h1>
                        <h3 className='text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-center'>An aspiring Software Engineer</h3>
                    </div>

                </div>
            </div>

            <Work />

            <Skills />

            <Projects />

            <Contact />

        </div>
  )
}
