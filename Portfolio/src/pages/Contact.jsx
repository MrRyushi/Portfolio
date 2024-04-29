import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
const githubIcon = <FontAwesomeIcon icon={faGithub} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

export default function Contact() {
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
  return (
    <div id="contact" className='px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72 space-y-10 py-20 montserrat text-gray-50 fade-in'>
        <div className='space-y-5'>
            <h1 className='font-bold text-3xl md:text-4xl xl:text-5xl'>Open to Freelance Collaborations</h1>
            <p className='text-xl md:text-2xl xl:text-3xl'>Got an exciting project in mind? Feel free to reach out via email or instant message to discuss further</p>

            <div className='space-y-2 '>
                <p className='text-lg md:text-xl xl:text-2xl'>jptmarcellana@gmail.com</p>
                <p className='text-lg md:text-xl xl:text-2xl'>(+63) 956 152 0056</p>
                <div className='space-x-2'>
                    <button className='text-gray-50 text-3xl' onClick={() => window.open('https://github.com/MrRyushi')}>{githubIcon}</button>
                    <button className='text-gray-50 text-3xl' onClick={() => window.open('https://linkedin.com/in/john-patrick-marcellana-61650224a')}>{linkedInIcon}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
