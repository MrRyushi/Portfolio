// import programming lanugages images
import iconC from '../assets/techstack/c.png'
import iconCSS from '../assets/techstack/css.png'
import iconHTML from '../assets/techstack/html.png'
import iconJava from '../assets/techstack/java.png'
import iconJavaScript from '../assets/techstack/javascript.png'
import iconPython from '../assets/techstack/python.png'
// import frameworks images
import iconReact from '../assets/techstack/react.png'
import iconExpress from '../assets/techstack/express.png'
import iconNode from '../assets/techstack/node.png'
import iconTailwind from '../assets/techstack/tailwind.png'
import iconBootstrap from '../assets/techstack/bootstrap.png'
// import databases images
import iconMongoDB from '../assets/techstack/mongodb.png'
import iconFirebase from '../assets/techstack/firebase.png'
import iconMysql from '../assets/techstack/mysql.png'
// import tools images
import iconGit from '../assets/techstack/git.png'
import iconGithub from '../assets/techstack/github.png'
import iconCanva from '../assets/techstack/canva.png'
import iconFigma from '../assets/techstack/figma.png'

export default function Skills() {
  return (
    <div id="skills" className='px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72 space-y-5 py-20 bg-gray-900 text-gray-50'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Technical Skills</h1>
        <div className='space-y-12 xs:space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32'>
            <div className='space-y-12'>
                <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Programming Languages</h1>
                <div className="text-lg ps-1 flex gap-10">
                    <div className='grid grid-cols-6 items-center text-center gap-10 justify-items-center text-2xl'>
                        <div className='space-y-4'>
                            <img src={iconC} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>   
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>C</h3>                        
                        </div>
                        <div className='space-y-4'>
                            <img src={iconPython} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32  xl:h-40"/>
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Python</h3>
                        </div>
                        <div className='space-y-4'>
                            <img src={iconJava} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32  xl:h-40"/>
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Java</h3>
                        </div>
                        <div className='space-y-4'>
                            <img src={iconHTML} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>HTML</h3>
                        </div>
                        <div className='space-y-4'>
                            <img src={iconCSS} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>CSS</h3>
                        </div>
                        <div className='space-y-4'>
                            <img src={iconJavaScript} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32  xl:h-40"/>
                            <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>JavaScript</h3>
                        </div>

                    </div>
                </div>
            </div>
            <div className='space-y-12'>
                <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Frameworks</h1>
                <div className='grid grid-cols-5 items-center text-center gap-10 justify-items-center text-2xl'>
                    <div className='space-y-4'>
                        <img src={iconReact} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>   
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>React</h3>                        
                    </div>
                    <div className='space-y-4'>
                        <img src={iconExpress} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Express</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconNode} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Node</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconTailwind} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Tailwind CSS</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconBootstrap} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Bootstrap</h3>
                    </div>                  
                </div> 
            </div>
            <div className='space-y-12'>
                <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Databases</h1>
                <div className='grid grid-cols-3 items-center text-center justify-items-center gap-10 text-2xl'>
                    <div className='space-y-4'>
                        <img src={iconMongoDB} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>MongoDB</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconFirebase} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Firebase</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconMysql} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>      
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>MySQL</h3> 
                    </div>
                           
                </div>
            </div>
            <div className='space-y-12'>
                <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Tools</h1>
                <div className='grid grid-cols-4 items-center text-center gap-10 justify-items-center text-2xl'>
                    <div className='space-y-4'>
                        <img src={iconGit} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>   
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Git</h3>                        
                    </div>
                    <div className='space-y-4'>
                        <img src={iconGithub} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Github</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconCanva} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Canva</h3>
                    </div>
                    <div className='space-y-4'>
                        <img src={iconFigma} className="h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 xl:h-40"/>
                        <h3 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>Figma</h3>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
