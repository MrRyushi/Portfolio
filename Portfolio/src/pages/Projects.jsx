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
                    <div className='bg-yellow-800 w-max py-2 px-4 flex items-center rounded-lg'>C</div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Wordle</h3>
                    <div className='space-x-2 border w-max p-2'>
                        <img src={wordleStartPage} className='inline'/>
                        <img src={wordleSampleRun} className='inline' />
                    </div>
                    <div className='bg-yellow-800 w-max py-2 px-4 flex items-center rounded-lg'>C</div>
                </div>
                
                <div className='space-y-2'>
                    <h3>MyFarm - a Simulation Farming Game</h3>
                    <Carousel className='rounded-xl'>
                        <img src={myfarmStartPage} alt='image 1' className='h-full w-full object-cover'/>
                        <img src={myfarmShop} alt='image 2' className='h-full w-full object-cover'/>
                        <img src={myfarmFarmLot} alt='image 3' className='h-full w-full object-cover'/>
                        <img src={myfarmInventoryPage} alt='image 4' className='h-full w-full object-cover'/>
                        <img src={myfarmStats} alt='image 5' className='h-full w-full object-cover'/>
                    </Carousel>

                    <div className='flex gap-2'>
                        <div className='bg-red-600 w-max py-2 px-4 flex items-center rounded-lg'>Java</div>
                        <div className='bg-red-600 w-max py-2 px-4 flex items-center rounded-lg'>Java Swing</div>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Homeowners Association - a Management System for a Homeowners Association</h3>
                    <Carousel className='rounded-xl'>
                        <img src={hoLanding} className='inline'/>
                        <img src={hoRegister} className='inline'/>
                    </Carousel>
                    <div className='flex gap-2'>
                        <div className='bg-red-600 w-max py-2 px-4 flex items-center rounded-lg'>Java</div>
                        <div className='bg-orange-600 w-max py-2 px-4 flex items-center rounded-lg'>HTML</div>
                        <div className='bg-blue-600 w-max py-2 px-4 flex items-center rounded-lg'>MySQL</div>     
                        <div className='bg-amber-600 w-max py-2 px-4 flex items-center rounded-lg'>JSP</div>                      
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
                        <div className='bg-orange-600 w-max py-2 px-4 flex items-center rounded-lg'>HTML, CSS, JavaScript</div>          
                        <div className='bg-yellow-800 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-600 w-max py-2 px-4 flex items-center rounded-lg'>Express JS</div>      
                        <div className='bg-green-600 w-max py-2 px-4 flex items-center rounded-lg'>MongoDB</div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Medical Chatbot - a Diagnostic Chatbot</h3>
                    <div className='flex space-x-2 items-center border overflow-x-auto p-2'>
                        <img src={chatbotStartPage} className=''/>
                        <img src={chatbotName} className=''/>
                        <img src={chatbotAge} className=''/>
                        <img src={chatbotEnvironment} className=''/>
                        <img src={chatbotChiefComplaint} className=''/>
                        <img src={chatbotSymptoms} className=''/>
                        <img src={chatbotTimeline} className=''/>
                        <img src={chatbotVice} className=''/>
                        <img src={chatbotHistory} className=''/>
                        <img src={chatbotResult} className=''/>
                        <img src={chatbotOther} className=''/>
                    </div>
                    <div className='bg-cyan-700 w-max py-2 px-4 flex items-center rounded-lg'>Prolog</div> 
                </div>

                <div className='space-y-2'> 
                    <h3>HealthSys <a href='https://healthysys.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://healthysys.netlify.app</a></h3>
                    <div className='flex gap-2'>
                        <div className='bg-blue-700 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-600 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-orange-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                    </div>
                </div>

                <div className='space-y-2'> 
                    <h3>Sentimetry <a href='https://sentimetry.vercel.app' className='text-neutral-50 underline underline-offset-1'>https://sentimetry.vercel.app</a></h3>
                    <div className='flex gap-2'>
                        <div className='bg-blue-700 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-600 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                        <div className='bg-sky-700 w-max py-2 px-4 flex items-center rounded-lg'>Python</div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Multivault <a href='https://multivault.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://multivault.netlify.app</a></h3>    
                    <div className='flex gap-2'>
                        <div className='bg-blue-700 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-600 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-orange-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
