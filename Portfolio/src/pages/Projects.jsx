// -- images --
// game of thrones
import gotStartPage from "../assets/got/startPage.png";
import gotHomePage from "../assets/got/homePage.png";
// wordle
import wordleStartPage from "../assets/wordle/startPage.png";
import wordleSampleRun from "../assets/wordle/sampleRun.png";
// myfarm
import myfarmStartPage from "../assets/myfarm/startingPage.png";
import myfarmInventoryPage from "../assets/myfarm/inventory.png";
import myfarmShop from "../assets/myfarm/shop.png";
import myfarmFarmLot from "../assets/myfarm/farmLot.png";
import myfarmStats from "../assets/myfarm/stats.png";
// homeowners
import hoLanding from "../assets/homeowners/landing.png";
import hoRegister from "../assets/homeowners/register.png";
// cyberlab
import labHomePage from "../assets/cyberlab/homepage.png";
import labLogin from "../assets/cyberlab/login.png";
import labProfile from "../assets/cyberlab/profile.png";
import labRegister from "../assets/cyberlab/register.png";
import labReservation from "../assets/cyberlab/reservations.png";
import labRoom from "../assets/cyberlab/room.png";
// medical chatbot
import chatbotAge from "../assets/chatbot/age.png";
import chatbotChiefComplaint from "../assets/chatbot/chiefcomplaint.png";
import chatbotEnvironment from "../assets/chatbot/environment.png";
import chatbotHistory from "../assets/chatbot/history.png";
import chatbotName from "../assets/chatbot/name.png";
import chatbotOther from "../assets/chatbot/other.png";
import chatbotResult from "../assets/chatbot/result.png";
import chatbotStartPage from "../assets/chatbot/startPage.png";
import chatbotSymptoms from "../assets/chatbot/symptoms.png";
import chatbotTimeline from "../assets/chatbot/timeline.png";
import chatbotVice from "../assets/chatbot/vice.png";

// -- carousel --
import { Carousel } from "@material-tailwind/react";
// import useState
import { useState } from "react";
import { useEffect } from "react";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const arrowUpFromSquare = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;

export default function Projects() {
  // use state for modals
  const [showGOT, setShowGOT] = useState(false);
  const [showCWordle, setShowCWordle] = useState(false);
  const [showMyFarm, setShowMyFarm] = useState(false);
  const [showHoA, setShowHoA] = useState(false);
  const [showCyberlab, setShowCyberlab] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72 space-y-5 bg-gradient-to-r from-teal-950 to-teal-600 py-20 montserrat"
    >
      <div className="space-y-7 text-gray-50">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold fade-in">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 text-xl ps-1 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
          <div className="space-y-2 fade-in">
            <div className="space-y-2 rounded-xl p-5 bg-teal-950/40 text-start">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() => setShowGOT(true)}
              >
                Game of Thrones-Inspired Game {arrowUpFromSquare}
              </button>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-loose">
                This project, submitted as part of CCPROG1 - Logic Formulation
                and Introductory Programming course, entails the development of
                a Game of Thrones-inspired game. In this game, players aim to
                accumulate Golden Dragons (GD), the currency of the realm,
                within a set time frame of 15 days.The game interface features
                various trading partners, each offering a unique set of wares
                and goods, with options including buying, selling, managing
                finances at the Iron Bank of Braavos, and navigating via the
                wheelhouse.
              </p>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-lg text-sm sm:text-md md:text-lg lg:text-xl">
                C Language
              </div>
            </div>
          </div>

          {showGOT && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
              <div className="xl:space-x-2 mx-16 space-y-2 border-2 border-white p-2 relative z-10 xl:flex items-center justify-center">
                <img
                  src={gotStartPage}
                  className="mx-auto"
                  alt="Game of Thrones Start Page"
                />
                <img
                  src={gotHomePage}
                  className=""
                  alt="Game of Thrones Home Page"
                />
              </div>
              <div
                onClick={() => setShowGOT(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <button
              className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
              onClick={() => setShowCWordle(true)}
            >
              C Wordle Plus {arrowUpFromSquare}
            </button>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project, submitted as part of CCPROG2 - Programming with
              Structured Data Types course aims to create a text-based version
              of the immensely popular game Wordle. In Wordle, players attempt
              to guess a five-letter word within six attempts, receiving
              feedback on their guesses to guide them. The task involves
              implementing this game in C while incorporating additional
              features.
            </p>
            <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
              C Language
            </div>
          </div>

          {showCWordle && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
              <div className="space-x-2 mx-16 space-y-2 border-2 border-white p-2 relative z-10 xl:flex items-center justify-center">
                <img src={wordleStartPage} className="mx-auto" />
                <img src={wordleSampleRun} className="mx-auto" />
              </div>
              <div
                onClick={() => setShowCWordle(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          {/*CCDSTRU Checkers Project*/}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600 text-start"
                onClick={() => setShowMyFarm(true)}
              >
                MyFarm {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/Samoyedeu/MyFarmMCO2")
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfillment of the course
              CCPROG3 - Object-Oriented Programming. Our task involved
              implementing a farming simulator game wherein users can buy seeds,
              plant, grow, and harvest crops. The objective of the game is to
              accumulate as much gold and experience as possible. The player
              gains perks as their farmer levels up such as double harvest
              drops, less seed costs, and less time before harvest.
            </p>

            <div className="flex gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Java
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Java Swing
              </div>
            </div>
          </div>

          {showMyFarm && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
              <div className="relative z-10 w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
                <Carousel className="rounded-xl h-full">
                  <img
                    src={myfarmStartPage}
                    alt="image 1"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={myfarmShop}
                    alt="image 2"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={myfarmFarmLot}
                    alt="image 3"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={myfarmInventoryPage}
                    alt="image 4"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={myfarmStats}
                    alt="image 5"
                    className="w-full h-full object-cover"
                  />
                </Carousel>
              </div>
              <div
                onClick={() => setShowMyFarm(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <button
              className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600 text-start"
              onClick={() => setShowHoA(true)}
            >
              Homeowners Management System {arrowUpFromSquare}
            </button>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfillment of the course
              CCINFOM - Information Management. This application handles the
              management system of a homeowners association in subdivisions.
              Admin user can register a homeowner, the {"association's"} assets,
              and occupants. This system monitors the capacity of the village
              and also each residency in a home. Users can also rent facilities
              and other assets of the association such as gyms, pools, and
              courts.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Java
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                MySQL
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                JSP
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                HTML
              </div>
            </div>
          </div>

          {showHoA && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 border">
              <div className="relative z-10 w-3/4 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto">
                <Carousel className="rounded-xl h-full mx-auto">
                  <img src={hoLanding} className="" />
                  <img src={hoRegister} className="" />
                </Carousel>
              </div>
              <div
                onClick={() => setShowHoA(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          {/* CSADPRG Tax Calculator */}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600 text-start"
                onClick={() => setShowCyberlab(true)}
              >
                CyberLab {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open(
                    "https://github.com/MrRyushi/CCAPDEV-Machine-Project"
                  )
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfilment of the course
              CCAPDEV - Web Application Development. This software application
              intends to help computer laboratory facilities in order to better
              manage reservations of slots. This app basically records a
              reservation of a client with a specified time slot and date.
              Students can access this system to easily book a slot as well and
              they can view which seats are taken for a specified time inverval
              on a specified date.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                HTML
              </div>
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                CSS
              </div>
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                JavaScript
              </div>
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Node JS
              </div>
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Express
              </div>
              <div className="bg-emerald-600 text-gray-100 p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                MongoDB
              </div>
            </div>
          </div>

          {showCyberlab && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 border">
              <div className="relative z-10 w-3/4 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto">
                <Carousel className="rounded-xl h-full mx-auto">
                  <img src={labLogin} className="inline" />
                  <img src={labRegister} className="inline" />
                  <img src={labHomePage} className="inline" />
                  <img src={labRoom} className="inline" />
                  <img src={labProfile} className="inline" />
                  <img src={labReservation} className="inline" />
                </Carousel>
              </div>
              <div
                onClick={() => setShowCyberlab(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() => setShowChatbot(true)}
              >
                Medical Chatbot {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/SakuZN/PROLOG-MCO2")
                }
              >
                {githubIcon}
              </button>
            </div>

            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This program was submitted in partial fulfilment of the course
              CSINTSY - Introduction to Intelligent Systems. This program is a
              diagnostic chat bot that aims to help those in remote areas with a
              little to no access to medical facilities. This system tries to
              identify the sickness of the patient through asking questions
              about their chief complaint, symptoms, and personal medical
              history. We used a backward chaining system shell in order to
              determine the sickness of the patient.
            </p>
            <div className="flex gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Prolog
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Java
              </div>
            </div>
          </div>

          {showChatbot && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 border">
              <div className="relative z-10 w-3/4 md:w-1/2 mx-auto">
                <Carousel className="rounded-xl h-full mx-auto">
                  <img src={chatbotStartPage} className="w-full" />
                  <img src={chatbotName} className="w-full" />
                  <img src={chatbotAge} className="w-full" />
                  <img src={chatbotEnvironment} className="w-full" />
                  <img src={chatbotChiefComplaint} className="w-full" />
                  <img src={chatbotSymptoms} className="w-full" />
                  <img src={chatbotTimeline} className="w-full" />
                  <img src={chatbotVice} className="w-full" />
                  <img src={chatbotHistory} className="w-full" />
                  <img src={chatbotResult} className="w-full h-full" />
                  <img src={chatbotOther} className="w-full" />
                </Carousel>
              </div>
              <div
                onClick={() => setShowChatbot(false)}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80"
              ></div>
            </div>
          )}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() => window.open("https://healthysys.netlify.app")}
              >
                HealthSys {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/shuan-co/Health-Care-System")
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfillment of the course
              CSSWENG - Software Engineering. This project intends to help a
              client that struggles with managing data records of patients in
              their hospitals. This system aids them by providing a medium to
              store the data with ease through digital forms to keep their
              records. This system shows each appointment of a patient in a
              specified clinic. The clinic admin is in charge of creating
              records in the system and retrieving them for external purposes.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                React
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Node JS
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Express
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Firebase
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Tailwind CSS
              </div>
            </div>
          </div>

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() => window.open("https://sentimetry.vercel.app")}
              >
                Sentimetry {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/riu-rd/Sentimetry")
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfilment of the course
              EMPATHY - Empathic Computing in Human-System Interaction. This
              application intends to help those that are experiencing mental
              health problems. This application basically is a journaling system
              where users can sign up and log their journal entries. The system
              will accurately detect the emotions in the journal they provided
              and the application will provide a tailored feedback specifically
              based on the input they have logged.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                React
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Node JS
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Express
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Firebase
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Python
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Tailwind CSS
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Hugging Face
              </div>
            </div>
          </div>

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() => window.open("https://multivault.netlify.app")}
              >
                Multivault {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/shuan-co/MultiVault")
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was submitted in partial fulfillment of the course
              STSWENG - Advanced Software Engineering. It aims to assist
              businesses in managing their inventory efficiently. The
              application serves as an inventory management system that enables
              administrators (owners of the establishment) to oversee their
              inventory. Administrators can add information such as quantity,
              expiration date, and perishability status for each item. The
              system promptly notifies administrators if any items are running
              low on stock or nearing expiration.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                React
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Node JS
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Express
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Firebase
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Tailwind CSS
              </div>
            </div>
          </div>

          {/* CSARCH2 Project */}

          <div className="space-y-2  rounded-xl p-5 bg-teal-950/40 fade-in">
            <div className="flex justify-between">
              <button
                className="text-lg lg:text-xl xl:text-2xl font-bold opacity-100 hover:text-emerald-600"
                onClick={() =>
                  window.open("https://wordle-plus-ryushi.vercel.app")
                }
              >
                Wordle Plus Web Version {arrowUpFromSquare}
              </button>
              <button
                className="text-3xl"
                onClick={() =>
                  window.open("https://github.com/MrRyushi/Wordle-Plus")
                }
              >
                {githubIcon}
              </button>
            </div>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
              This project was a self-initiated web version of my machine
              project from my first year in college. The game is similar to
              Wordle, where players try to guess a five-letter word within six
              attempts, receiving feedback on their guesses to guide them.
              Additionally, this project features leaderboards where players can
              view the wins, losses, and win streaks of other participants.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                React
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Node JS
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Express
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Firebase
              </div>
              <div className="bg-emerald-600 text-gray-100 w-max p-2 flex items-center rounded-md shadow-2xl drop-shadow-2xl text-sm sm:text-md md:text-lg lg:text-xl">
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
