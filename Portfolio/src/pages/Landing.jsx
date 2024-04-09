import '.././index.css'
import { useState } from 'react'

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
                <div className='px-72 space-y-5'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold'>Past Projects (Still in development)</h1>
                        <div className='text-xl ps-1'>
                            <h3>Game of Thrones</h3>
                            <h3>Wordle</h3>
                            <h3>MyFarm</h3>
                            <h3>Homeowners Association</h3>
                            <h3>CyberLab</h3>
                            <h3>HealthCare System</h3>
                            <h3>Multivault</h3>
                        </div>
                    </div>
                </div>
            </>) : (<></>)}

            {selected == 'skills' ? (<>
                <div className='px-72 space-y-5'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold'>Professional Skills</h1>
                        <div className='text-lg ps-1'>
                            <h3>Critical Thinking</h3>
                            <h3>Time management</h3>
                            <h3>Active Listening</h3>
                            <h3>Problem Solving</h3>
                            <h3>Communication</h3>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold'>Technical Skills</h1>
                        <div className='text-lg ps-1'>
                            <h3>Programming Languages: C, Python, Java, JavaScript</h3>
                            <h3>Software Development</h3>
                            <h3>Databases</h3>
                            <h3>Figma</h3>
                            <h3>Canva</h3>                          
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold'>Interests</h1>
                        <h3 className='ps-1'>UI / UX, Machine Learning, Data Science, Computer Vision, Playing Video Games, Watching Anime</h3>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold'>Tech Stack Used</h1>
                        <div className='text-lg ps-1'>
                            <h3>React JS</h3>
                            <h3>Express JS</h3>
                            <h3>Node JS</h3>
                            <h3>Python</h3>
                            <h3>Java</h3>    
                            <h3>MySQL</h3>   
                            <h3>TailWind CSS</h3>   
                            <h3>Bootstrap</h3>                   
                        </div> 
                    </div>
                </div>
            </>) : (<></>)}

            {selected == 'contact' ? (<>
                <div className='px-72 space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-3xl'>Contact Information</h1>
                        <div className='ps-2'>
                            <h1 className='text-xl'>John Patrick T. Marcellana</h1>
                            <h3 className='text-xl'>jptmarcellana@gmail.com</h3>
                            <h3 className='text-xl'>+639561520056</h3>
                            <a href='https://www.linkedin.com/in/john-patrick-marcellana-61650224a/'>LinkedIn</a>
                            <a href='https://github.com/MrRyushi'>Github</a>
                        </div>
                    </div>
                    <div className=''>
                        <form className='space-y-2'>
                            <h1 className='font-bold text-3xl'>Send me a message!</h1>
                            <input type='email' placeholder='Your email' className='block w-1/2 border border-black rounded-lg p-2'/>
                            <textarea type='text' placeholder='Your message' className='w-1/2 h-28 border border-black rounded-lg p-2'/>
                            <button type='submit' className='block border bg-slate-900 text-slate-50 py-3 px-5 rounded-xl hover:bg-slate-700'>Send</button>
                        </form>
                    </div>
                </div>
            </>) : (<></>)}
        </div>
      </div>
    </div>
  )
}
