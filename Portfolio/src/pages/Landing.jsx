import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'; // Import Transition from headless UI
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import profilePic from '../assets/profile/profile.png';

export default function Landing() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 1007); // Adjust the width as needed
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
        <div className='h-screen w-screen'>
            <div id='home' className='flex justify-between items-center bg-teal-950 text-gray-50 px-5 py-3'>
                <button
                    className='blockhover:text-teal-400 ps-10 md:ps-20 text-md sm:text-lg md:text-xl'
                    onClick={() => {
                        const tellMeMoreElement = document.getElementById('home');
                        if (tellMeMoreElement) {
                            tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Home
                </button>
                {isSmallScreen ? (
                    <button className='text-md sm:text-lg md:text-xl hover:text-teal-400 pe-10' onClick={() => setIsOpen(!isOpen)}>
                        Menu
                    </button>
                ) : (
                    <div className='flex gap-10 item-center pe-20'>
                        <button
                            className='block text-xl hover:text-teal-400'
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
                            className='block text-xl hover:text-teal-400'
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
                            className='block text-xl hover:text-teal-400'
                            onClick={() => {
                                setIsOpen(false);
                                handleDownload();
                            }}
                        >
                            Resume / CV
                        </button>
                        <button
                            className='block text-xl hover:text-teal-400'
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
            <div className='px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72 space-y-10 py-20 bg-stone-50 w-screen'>
                <div className='space-y-1 flex justify-center gap-20 items-center mb-20'>
                    <div>
                        <h1 className='text-2xl xs:text-2xl md:text-3xl lg:text-4xl'>Hi, I'm <b>JP</b></h1>
                        <h3 className='text-sm xs:text-md md:text-lg lg:text-xl'>An aspiring Software Engineer</h3>
                    </div>
                    <div>
                        <img src={profilePic} className='w-96'/>
                        <p className="text-xs md:text-md text-gray-500 mt-2">Image source: <a href="https://www.pinterest.ph/pin/1118440888690338214/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
                    </div>

                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg md:text-xl lg:text-2xl'>About me</h1>
                    <h3 className='text-sm md:text-lg xl:text-xl ps-1'>
                        I'm currently an Undergraduate Student taking up Bachelor of Science in Computer Science Major in  Software Technology at De La Salle University. I am eager to contribute 
                        innovative solutions to real-world problems, collaborate within dynamic teams, and continuously expand my knowledge in emerging technologies. I am interested in learning more
                        about <b>Web Development</b> and also learning about <b>Computer Vision</b>. Throughout my three years of college, as I delved into a multitude of projects, programs, and lessons, 
                        my passion for the field only grew stronger. 
                    </h3>
                </div>
            </div>

            <Skills />

            <Projects />

            <Contact />

        </div>
  )
}
