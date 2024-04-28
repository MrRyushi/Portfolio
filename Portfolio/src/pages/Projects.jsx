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
    <div id='projects' className='px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72 space-y-5 bg-gradient-to-r from-teal-950 to-teal-600 py-20 montserrat'>
        <div className='space-y-7 text-gray-50'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 text-xl ps-1 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20'>
                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold opacity-100'>Game of Thrones-Inspired Game</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project, submitted as part of CCPROG1 - Logic Formulation and Introductory Programming course, entails the development of a Game of 
                        Thrones-inspired game. In this game, players aim to accumulate Golden Dragons (GD), the currency of the realm, within a set time frame of 
                        15 days.The game interface features various trading partners, each offering a unique set of wares and goods, with options including buying, 
                        selling, managing finances at the Iron Bank of Braavos, and navigating via the wheelhouse.
                    </p>
                    <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-lg text-sm sm:text-md md:text-lg lg:text-xl'>
                        C Language
                    </div>
                </div>
                
                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>C Wordle Plus</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project, submitted as part of CCPROG2 - Programming with Structured Data Types course aims to create a text-based version of the immensely 
                        popular game Wordle. In Wordle, players attempt to guess a five-letter word within six attempts, 
                        receiving feedback on their guesses to guide them. The task involves implementing this game in C while incorporating additional features.  
    
                    </p>
                    <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                        C Language
                    </div>
                </div>

                {/*CCDSTRU Checkers Project*/}
                
                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>MyFarm - a Simulation Farming Game</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfillment of the course CCPROG3 - Object-Oriented Programming. Our task involved implementing a farming 
                        simulator game wherein users can buy seeds, plant, grow, and harvest crops. The objective of the game is to accumulate as much gold and experience 
                        as possible. The player gains perks as their farmer levels up such as double harvest drops, less seed costs, and less time before harvest.
                    </p>
                    {/*
                    <Carousel className='rounded-xl w-1/2'>
                        <img src={myfarmStartPage} alt='image 1' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmShop} alt='image 2' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmFarmLot} alt='image 3' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmInventoryPage} alt='image 4' className='h-1/2 w-full object-cover'/>
                        <img src={myfarmStats} alt='image 5' className='h-1/2 w-full object-cover'/>
                    </Carousel>*/}

                    <div className='flex gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Java
                        </div>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Java Swing
                        </div>
                    </div>
                </div>
                
                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>Homeowners Management System</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfillment of the course CCINFOM - Information Management. This application handles the management system of
                        a homeowners association in subdivisions. Admin user can register a homeowner, the association's assets, and occupants. This system monitors the 
                        capacity of the village and also each residency in a home. Users can also rent facilities and other assets of the association such as gyms, pools, 
                        and courts.
                    </p>
                    {/*<Carousel className='rounded-xl'>
                        <img src={hoLanding} className='inline'/>
                        <img src={hoRegister} className='inline'/>
                    </Carousel>*/}
                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Java
                        </div>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            MySQL
                        </div>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            JSP
                        </div>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            HTML
                        </div>              
                    </div>
                </div>

                {/* CSADPRG Tax Calculator */}

                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>CyberLab - a Computer Lab Reservation Management System</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfilment of the course CCAPDEV - Web Application Development. This software application intends to help
                        computer laboratory facilities in order to better manage reservations of slots. This app basically records a reservation of a client with a specified
                        time slot and date. Students can access this system to easily book a slot as well and they can view which seats are taken for a specified time inverval 
                        on a specified date.
                    </p>
                    {/*
                    <Carousel className='rounded-xl'>
                        <img src={labLogin} className='inline'/>
                        <img src={labRegister} className='inline'/>
                        <img src={labHomePage} className='inline'/>
                        <img src={labRoom} className='inline'/>
                        <img src={labProfile} className='inline'/>
                        <img src={labReservation} className='inline'/>
                    </Carousel>*/}
                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            HTML
                        </div>         
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            CSS
                        </div>    
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            JavaScript
                        </div>    
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Node JS
                        </div>                    
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Express
                        </div>      
                        <div className='bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            MongoDB
                        </div> 
                    </div>

                </div>

                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>Medical Chatbot</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This program was submitted in partial fulfilment of the course CSINTSY - Introduction to Intelligent Systems. This program is a diagnostic chat bot
                        that aims to help those in remote areas with a little to no access to medical facilities. This system tries to identify the sickness of the patient
                        through asking questions about their chief complaint, symptoms, and personal medical history. We used a backward chaining system shell in order to 
                        determine the sickness of the patient.
                    </p>
                    {/*
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
                </Carousel>*/}
                    <div className='flex gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Prolog
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Java
                        </div> 
                    </div>
                </div>

                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'> 
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>HealthSys {/*<a href='https://healthysys.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://healthysys.netlify.app</a>*/}</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfillment of the course CSSWENG - Software Engineering. This project intends to help a client that struggles
                        with managing data records of patients in their hospitals. This system aids them by providing a medium to store the data with ease through digital forms
                        to keep their records. This system shows each appointment of a patient in a specified clinic. The clinic admin is in charge of creating records in the system
                        and retrieving them for external purposes.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            React
                        </div>       
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Node JS
                        </div>               
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Express
                        </div>    
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Firebase
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Tailwind CSS
                        </div> 
                    </div>
                </div>

                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'> 
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>Sentimetry {/*<a href='https://sentimetry.vercel.app' className='text-neutral-50 underline underline-offset-1'>https://sentimetry.vercel.app</a>*/}</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfilment of the course EMPATHY - Empathic Computing in Human-System Interaction. This application intends to 
                        help those that are experiencing mental health problems. This application basically is a journaling system where users can sign up and log their journal entries. 
                        The system will accurately detect the emotions in the journal they provided and the application will provide a tailored feedback specifically based on the 
                        input they have logged.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            React
                        </div>       
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Node JS
                        </div>               
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Express
                        </div>    
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Firebase
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Python
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Tailwind CSS
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Hugging Face
                        </div> 
                    </div>
                </div>

                <div className='space-y-2 bg-teal-950/30 rounded-xl p-5 hover:bg-teal-950/40'>
                    <h3 className='text-lg lg:text-xl xl:text-2xl font-bold'>Multivault {/*<a href='https://multivault.netlify.app' className='text-neutral-50 underline underline-offset-1'>https://multivault.netlify.app</a>*/}</h3>
                    <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
                        This project was submitted in partial fulfillment of the course STSWENG - Advanced Software Engineering. It aims to assist businesses in managing 
                        their inventory efficiently. The application serves as an inventory management system that enables administrators (owners of the establishment) to 
                        oversee their inventory. Administrators can add information such as quantity, expiration date, and perishability status for each item. The system 
                        promptly notifies administrators if any items are running low on stock or nearing expiration.  
                    </p>    
                    <div className='flex flex-wrap gap-2'>
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            React
                        </div>       
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Node JS
                        </div>               
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Express
                        </div>    
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Firebase
                        </div> 
                        <div className='bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl'>
                            Tailwind CSS
                        </div> 
                    </div>
                </div>

                {/* CSARCH2 Project */}
            </div>
        </div>
    </div>
  )
}
