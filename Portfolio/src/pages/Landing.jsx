import '.././index.css'
import { useState } from 'react'
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function Landing() {
    const [selected, setSelected] = useState('home')

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
    <div className='flex justify-center h-screen'>
      <div className='space-y-10'>
        <div className='flex gap-20 ps-20 w-screen p-5 bg-slate-900 text-slate-50 items-center'>
            <button onClick={() => setSelected('home')} className='text-xl hover:text-blue-300'>Home</button>
            <button onClick={() => setSelected('projects')} className='text-xl hover:text-blue-300'>Projects</button>
            <button onClick={() => setSelected('skills')} className='text-xl hover:text-blue-300'>Skills</button>
            <button onClick={() => handleDownload()} className='text-xl hover:text-blue-300'>Resume / CV</button>
            <button onClick={() => setSelected('contact')} className='text-xl hover:text-blue-300'>Contact</button>
        </div>
        <div>
            {selected == 'home' ? (<>
                <div className='px-72 space-y-5'>
                    <div className='space-y-1'>
                        <h1 className='text-4xl'>Hello! I am <b>John Patrick T. Marcellana</b></h1>
                        <h3 className='text-2xl'>An aspiring Software Developer</h3>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-xl'>Welcome to my corner of the digital world!</h3>
                        <h3 className='text-xl ps-1'>
                            As a passionate student pursuing a Bachelor's degree in Computer Science, this e-portfolio serves as a digital canvas where I showcase my projects, accomplishments, and growth in the realm of technology.
                            Throughout my academic endeavors, I've immersed myself in the dynamic world of coding, algorithms, and problem-solving. Each line of code written and each project undertaken has been a stepping stone in my quest for excellence in software development.
                            Within these virtual walls, you'll find a collection of my projects, from humble beginnings to more intricate endeavors. Each project represents not just a piece of code, but a journey of discovery, learning, and innovation.
                        </h3>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-xl'>What are my goals?</h3>
                        <h3 className='text-xl ps-1'>
                            To leverage my comprehensive understanding of computer science principles and programming languages acquired through a Bachelor's degree in Computer Science towards securing a challenging position as a software developer. 
                            Eager to contribute innovative solutions to real-world problems, collaborate within dynamic teams, and continuously expand my knowledge in emerging technologies
                        </h3>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl'>My Objective:</h3>
                        <h3 className='text-xl ps-1'>
                            In this portfolio, my aim is to present a comprehensive overview of my educational background, technical skills, and diverse projects within the realm of computer science. 
                            Through this platform, I aspire to highlight my proficiency in various programming languages, algorithms, and software development methodologies cultivated during my pursuit of a Bachelor's degree in Computer Science.
                        </h3>
                    </div>
                </div>
            </>) : (<></>)}

            {selected == 'projects' ? (<>
                <Projects />
            </>) : (<></>)}

            {selected == 'skills' ? (<>
                <Skills />
            </>) : (<></>)}

            {selected == 'contact' ? (<>
                <Contact />
            </>) : (<></>)}
        </div>
      </div>
    </div>
  )
}
