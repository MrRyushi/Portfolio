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
    <div id="skills" className='px-72 space-y-5 py-20 bg-gray-900 text-gray-50'>
        <h1 className='text-6xl font-bold'>Technical Skills</h1>
        <div className='space-y-32'>
            <div className='space-y-12'>
                <h1 className='text-3xl font-bold'>Programming Languages</h1>
                <div className="text-lg ps-1 flex gap-10">
                    <div className='grid grid-cols-6 items-center text-center gap-10 justify-items-center text-2xl'>
                        <img src={iconC} className=""/>
                        <img src={iconPython} className=""/>
                        <img src={iconJava} className=""/>
                        <img src={iconHTML} className=""/>
                        <img src={iconCSS} className=""/>
                        <img src={iconJavaScript} className=""/>
                        <h3>C</h3>
                        <h3>Python</h3>
                        <h3>Java</h3>
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className='space-y-12'>
                <h1 className='text-3xl font-bold'>Frameworks</h1>
                <div className='grid grid-cols-5 items-center text-center gap-10 justify-items-center text-2xl'>
                    <img src={iconReact} className=""/>
                    <img src={iconExpress} className=""/>
                    <img src={iconNode} className=""/>
                    <img src={iconTailwind} className=""/>
                    <img src={iconBootstrap} className=""/>
                    <h3>React JS</h3>
                    <h3>Express JS</h3>
                    <h3>Node JS</h3>
                    <h3>TailWind CSS</h3>   
                    <h3>Bootstrap</h3>                   
                </div> 
            </div>
            <div className='space-y-12'>
                <h1 className='text-3xl font-bold'>Databases</h1>
                <div className='grid grid-cols-3 items-center text-center justify-items-center gap-10 text-2xl'>
                    <img src={iconMongoDB} className="h-1/2"/>
                    <img src={iconFirebase} className="h-1/2"/>
                    <img src={iconMysql} className="h-1/2"/>      
                    <h3>MongoDB</h3>
                    <h3>Firebase</h3>
                    <h3>MySQL</h3>        
                </div>
            </div>
            <div className='space-y-12'>
                <h1 className='text-3xl font-bold'>Tools</h1>
                <div className='grid grid-cols-4 items-center text-center gap-10 justify-items-center text-2xl'>
                    <img src={iconGit} className=""/>
                    <img src={iconGithub} className=""/>
                    <img src={iconCanva} className=""/>
                    <img src={iconFigma} className=""/>
                    <h3>Git</h3>
                    <h3>Github</h3>
                    <h3>Canva</h3>
                    <h3>Figma</h3>
                    <h3></h3>               
                </div> 
            </div>
        </div>
    </div>
  )
}
