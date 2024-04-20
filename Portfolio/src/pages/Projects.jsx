// -- images --
// game of thrones
import gotStartPage from '../assets/got/startPage.png'
import gotHomePage from '../assets/got/homePage.png'
// wordle
import wordleStartPage from '../assets/wordle/startPage.png'
import wordleSampleRun from '../assets/wordle/sampleRun.png'
// myfarm
import myfarmStartPage from '../assets/myfarm/startingPage.png'
import myfarmInventoryPage from '../assets/myfarm/inventory.png'
import myfarmShop from '../assets/myfarm/shop.png'
import myfarmFarmLot from '../assets/myfarm/farmLot.png'
import myfarmStats from '../assets/myfarm/stats.png'
// homeowners
import hoLanding from '../assets/homeowners/landing.png'
import hoRegister from '../assets/homeowners/register.png'
// cyberlab
import labHomePage from '../assets/cyberlab/homepage.png'
import labLogin from '../assets/cyberlab/login.png'
import labProfile from '../assets/cyberlab/profile.png'
import labRegister from '../assets/cyberlab/register.png'
import labReservation from '../assets/cyberlab/reservations.png'
import labRoom from '../assets/cyberlab/room.png'
// medical chatbot
import chatbotAge from '../assets/chatbot/age.png'
import chatbotChiefComplaint from '../assets/chatbot/chiefcomplaint.png'
import chatbotEnvironment from '../assets/chatbot/environment.png'
import chatbotHistory from '../assets/chatbot/history.png'
import chatbotName from '../assets/chatbot/name.png'
import chatbotOther from '../assets/chatbot/other.png'
import chatbotResult from '../assets/chatbot/result.png'
import chatbotStartPage from '../assets/chatbot/startPage.png'
import chatbotSymptoms from '../assets/chatbot/symptoms.png'
import chatbotTimeline from '../assets/chatbot/timeline.png'
import chatbotVice from '../assets/chatbot/vice.png'
// import programming lanugages images
import iconC from '../assets/techstack/c.png'
import iconCSS from '../assets/techstack/css.png'
import iconHTML from '../assets/techstack/html.png'
import iconJava from '../assets/techstack/java.png'
import iconJavaScript from '../assets/techstack/javascript.png'
import iconPython from '../assets/techstack/python.png'
import iconProlog from '../assets/techstack/prolog.png'
// import frameworks images
import iconReact from '../assets/techstack/react.png'
import iconExpress from '../assets/techstack/express.png'
import iconNode from '../assets/techstack/node.png'
import iconTailwind from '../assets/techstack/tailwind.png'
import iconBootstrap from '../assets/techstack/bootstrap.png'
import iconJavaSwing from '../assets/techstack/javaswing.png'
import iconJSP from '../assets/techstack/jsp.png'
// import databases images
import iconMongoDB from '../assets/techstack/mongodb.png'
import iconFirebase from '../assets/techstack/firebase.png'
import iconMysql from '../assets/techstack/mysql.png'

// -- carousel --
import { Carousel } from "@material-tailwind/react"

export default function Projects() {
  return (
    <div id='projects' className='px-72 space-y-5 bg-teal-900 py-20'>
        <div className='space-y-1 text-gray-50'>
            <h1 className='text-4xl font-bold'>Past Projects</h1>
            <div className='text-xl ps-1 space-y-16'>
                <div className='space-y-2'>
                    <h3>Game of Thrones Game</h3>
                    <div className='space-x-2 border w-max p-2'>
                        <img src={gotStartPage} className='inline'/>
                        <img src={gotHomePage} className='inline'/>
                    </div>
                    <div className='bg-gray-300 w-16 p-2 flex items-center rounded-lg'>
                        <img src={iconC} alt='C' className=''/>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Wordle</h3>
                    <div className='space-x-2 border w-max p-2'>
                        <img src={wordleStartPage} className='inline'/>
                        <img src={wordleSampleRun} className='inline' />
                    </div>
                    <div className='bg-gray-300 w-16 p-2 flex items-center rounded-lg'>
                        <img src={iconC} className=''/>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h3>MyFarm - a Simulation Farming Game</h3>
                    <Carousel className='rounded-xl w-1/2'>
                        <img src={myfarmStartPage} alt='image 1' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmShop} alt='image 2' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmFarmLot} alt='image 3' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmInventoryPage} alt='image 4' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmStats} alt='image 5' className='h-1/2 w-full object-cover'/>
                    </Carousel>

                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJava} className=''/>
                        </div>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJavaSwing} className=''/>
                        </div>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Homeowners Association - a Management System for a Homeowners Association</h3>
                    <Carousel className='rounded-xl'>
                        <img src={hoLanding} className='inline'/>
                        <img src={hoRegister} className='inline'/>
                    </Carousel>
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJava} className=''/>
                        </div>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconHTML} className=''/>
                        </div>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconMysql} className=''/>
                        </div>   
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJSP} className=''/>
                        </div>                    
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>CyberLab - a Computer Lab Reservation Management System</h3>
                    <Carousel className='rounded-xl'>
                        <img src={labLogin} className='inline'/>
                        <img src={labRegister} className='inline'/>
                        <img src={labHomePage} className='inline'/>
                        <img src={labRoom} className='inline'/>
                        <img src={labProfile} className='inline'/>
                        <img src={labReservation} className='inline'/>
                    </Carousel>
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconHTML} className=''/>
                        </div>         
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconCSS} className=''/>
                        </div>    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJavaScript} className=''/>
                        </div>    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconNode} className=''/>
                        </div>                    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconExpress} className=''/>
                        </div>      
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconMongoDB} className=''/>
                        </div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Medical Chatbot - a Diagnostic Chatbot</h3>
                    <Carousel className='rounded-xl w-1/2'>
                        <img src={chatbotStartPage} className='w-full'/>
                        <img src={chatbotName} className='w-full'/>
                        <img src={chatbotAge} className='w-full'/>
                        <img src={chatbotEnvironment} className='w-full'/>
                        <img src={chatbotChiefComplaint} className='w-full'/>
                        <img src={chatbotSymptoms} className='w-full'/>
                        <img src={chatbotTimeline} className='w-full'/>
                        <img src={chatbotVice} className='w-full'/>
                        <img src={chatbotHistory} className='w-full'/>
                        <img src={chatbotResult} className='w-full'/>
                        <img src={chatbotOther} className='w-full'/>
                    </Carousel>
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconProlog} className=''/>
                        </div> 
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconJava} className=''/>
                        </div> 
                    </div>
                </div>

                <div className='space-y-2'> 
                    <h3>HealthSys: <a href='https://healthysys.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://healthysys.netlify.app</a></h3>
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconReact} className=''/>
                        </div>       
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconNode} className=''/>
                        </div>               
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconExpress} className=''/>
                        </div>    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconFirebase} className=''/>
                        </div> 
                    </div>
                </div>

                <div className='space-y-2'> 
                    <h3>Sentimetry: <a href='https://sentimetry.vercel.app' className='text-neutral-50 underline underline-offset-1'>https://sentimetry.vercel.app</a></h3>
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconReact} className=''/>
                        </div>       
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconNode} className=''/>
                        </div>               
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconExpress} className=''/>
                        </div>    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconFirebase} className=''/>
                        </div> 
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconPython} className=''/>
                        </div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Multivault: <a href='https://multivault.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://multivault.netlify.app</a></h3>    
                    <div className='flex gap-2'>
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconReact} className=''/>
                        </div>       
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconNode} className=''/>
                        </div>               
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconExpress} className=''/>
                        </div>    
                        <div className='bg-gray-300 w-16 p-2 rounded-lg items-center flex'>
                            <img src={iconFirebase} className=''/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
