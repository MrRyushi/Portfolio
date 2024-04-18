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
// cyberlab
import labHomePage from '../assets/cyberlab/homepage.png'
import labLogin from '../assets/cyberlab/login.png'
import labProfile from '../assets/cyberlab/profile.png'
import labRegister from '../assets/cyberlab/register.png'
import labReservation from '../assets/cyberlab/reservations.png'
import labRoom from '../assets/cyberlab/room.png'

export default function Projects() {
  return (
    <div className='px-72 space-y-5'>
        <div className='space-y-1'>
            <h1 className='text-3xl font-bold'>Past Projects (Still in development)</h1>
            <div className='text-xl ps-1 space-y-3'>
                <div className='space-y-2'>
                    <h3>Game of Thrones</h3>
                    <div className='space-x-2 border w-max p-2'>
                        <img src={gotStartPage} className='w-96 inline'/>
                        <img src={gotHomePage} className='w-96 inline'/>
                    </div>
                    <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>C Programming Language</div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Wordle</h3>
                    <div className='space-x-2 border w-max p-2'>
                        <img src={wordleStartPage} className='w-96 inline'/>
                        <img src={wordleSampleRun} className='w-96 inline' />
                    </div>
                    <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>C Programming Language</div>
                </div>
                
                <div className='space-y-2'>
                    <h3>MyFarm - a Simulation Farming Game</h3>
                    <div className='flex space-x-2 overflow-x-auto border p-2'>
                        <img src={myfarmStartPage} className='w-96 inline'/>
                        <img src={myfarmShop} className='w-96 inline'/>
                        <img src={myfarmFarmLot} className='w-96 inline'/>
                        <img src={myfarmInventoryPage} className='w-96 inline'/>
                        <img src={myfarmStats} className='w-96 inline'/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='bg-red-300 w-max py-2 px-4 flex items-center rounded-lg'>Java</div>
                        <div className='bg-red-300 w-max py-2 px-4 flex items-center rounded-lg'>Java Swing</div>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <h3>Homeowners Association - a Management System for Homeowners</h3>
                    <div className='flex gap-2'>
                        <div className='bg-red-300 w-max py-2 px-4 flex items-center rounded-lg'>Java</div>
                        <div className='bg-orange-300 w-max py-2 px-4 flex items-center rounded-lg'>HTML</div>
                        <div className='bg-slate-300 w-max py-2 px-4 flex items-center rounded-lg'>MySQL</div>                                  
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>CyberLab - a Computer Lab Management System</h3>
                    <div className='flex space-x-2 overflow-x-auto border p-2'>
                        <img src={labLogin} className='w-96 inline'/>
                        <img src={labRegister} className='w-96 inline'/>
                        <img src={labHomePage} className='w-96 inline'/>
                        <img src={labRoom} className='w-96 inline'/>
                        <img src={labProfile} className='w-96 inline'/>
                        <img src={labReservation} className='w-96 inline'/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='bg-orange-300 w-max py-2 px-4 flex items-center rounded-lg'>HTML, CSS, JavaScript</div>          
                        <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-300 w-max py-2 px-4 flex items-center rounded-lg'>Express JS</div>      
                        <div className='bg-green-300 w-max py-2 px-4 flex items-center rounded-lg'>MongoDB</div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Medical Chatbot - a Diagnostic Chatbot</h3>
                    <div className='bg-cyan-700 w-max py-2 px-4 flex items-center rounded-lg'>Prolog</div> 
                </div>

                <div className='space-y-2'> 
                    <h3>HealthSys <a href='https://healthysys.netlify.app' className='text-blue-700 underline underline-offset-1'>Link</a></h3>
                    <div className='flex gap-2'>
                        <div className='bg-blue-300 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-300 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                    </div>
                </div>

                <div className='space-y-2'> 
                    <h3>Sentimetry <a href='https://sentimetry.vercel.app' className='text-blue-700 underline underline-offset-1'>Link</a></h3>
                    <div className='flex gap-2'>
                    <div className='bg-blue-300 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-300 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                        <div className='bg-blue-500 w-max py-2 px-4 flex items-center rounded-lg'>Python</div> 
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3>Multivault <a href='https://multivault.netlify.app' className='text-blue-700 underline underline-offset-1'>Link</a></h3>    
                    <div className='flex gap-2'>
                        <div className='bg-blue-300 w-max py-2 px-4 flex items-center rounded-lg'>React JS</div>          
                        <div className='bg-yellow-300 w-max py-2 px-4 flex items-center rounded-lg'>NodeJS</div>                 
                        <div className='bg-amber-300 w-max py-2 px-4 flex items-center rounded-lg'>Express</div>      
                        <div className='bg-yellow-600 w-max py-2 px-4 flex items-center rounded-lg'>Firebase</div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
