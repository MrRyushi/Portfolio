import '.././index.css'
import { useState } from 'react'
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

// import profile pic
import profilePic from '../assets/profile/profile.png'

export default function Landing() {
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
    <div className='flex h-screen'>
      <div className=''>
        <div className='flex gap-20 ps-20 w-screen p-5 bg-teal-900 text-gray-50 items-center'>
            <button 
                className='text-xl hover:text-teal-400'
                onClick={() => {
                    const tellMeMoreElement = document.getElementById('faq');
                    if (tellMeMoreElement) {
                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                }
            >Home</button>
            <button className='text-xl hover:text-teal-400'
                onClick={() => {
                    const tellMeMoreElement = document.getElementById('projects');
                    if (tellMeMoreElement) {
                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                }
            >Projects</button>
            <button className='text-xl hover:text-teal-400'
                onClick={() => {
                    const tellMeMoreElement = document.getElementById('skills');
                    if (tellMeMoreElement) {
                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                }
            >Skills</button>
            <button onClick={() => handleDownload()} className='text-xl hover:text-teal-400'>Resume / CV</button>
            <button className='text-xl hover:text-teal-400'
                onClick={() => {
                    const tellMeMoreElement = document.getElementById('contact');
                    if (tellMeMoreElement) {
                        tellMeMoreElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                }
            >Contact</button>
        </div>
        <div>
            <div className='px-72 space-y-10 py-20 bg-stone-50'>
                <div className='space-y-1 flex justify-center gap-20 items-center mb-20'>
                    <div>
                        <h1 className='text-4xl'>Hi, I'm <b>JP</b></h1>
                        <h3 className='text-xl'>An aspiring Software Engineer</h3>
                    </div>
                    <div>
                        <img src={profilePic} className='w-96'/>
                        <p className="text-sm text-gray-500 mt-2">Image source: <a href="https://www.pinterest.ph/pin/1118440888690338214/" target="_blank" rel="noopener noreferrer">Pinterest</a></p>
                    </div>

                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl'>About me</h1>
                    <h3 className='text-xl ps-1'>
                        I'm currently an Undergraduate Student taking up Bachelor of Science in Computer Science Major in  Software Technology at De La Salle University. I am eager to contribute 
                        innovative solutions to real-world problems, collaborate within dynamic teams, and continuously expand my knowledge in emerging technologies. I am interested in learning more
                        about <b>Web Development</b> and also learning about <b>Computer Vision</b>. Throughout my three years of college, as I delved into a multitude of projects, programs, and lessons, 
                        my passion for the field only grew stronger. 
                    </h3>
                </div>
            </div>

            <Projects />

            <Skills />

            <Contact />

        </div>
      </div>
    </div>
  )
}
