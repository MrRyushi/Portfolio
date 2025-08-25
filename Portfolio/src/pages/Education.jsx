
const Education = () => {
  return (
    <div id="education">
      <div className="xl:space-y-6 px-12 sm:px-24 md:px-32 lg:px-48 xl:px-60 2xl:px-72 montserrat pt-10 py-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          Education
        </h1>

        <div className=" p-4 rounded-xl shadow-2xl drop-shadow-2xl">
          <div className="col-span-4 space-y-3 text-white">
            <div className="">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Bachelor of Science in Computer Science Major in Software Technology
              </p>
              <div className="ms-3 text-gray-300">
                <p className="text-base md:text-lg lg:text-xl ">
                  October 2021 - December 2025
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  Current Cumulative GPA: <span className="font-bold">3.615</span>
                </p>
              </div>
        
            </div>

            {/* <div className="grid grid-cols-3 gap-2 text-base md:text-lg lg:text-xl">
              <div>
                <h1 >Publication</h1>
                <h2>SentiMetry: A Development of Emotional Wellness Web Application Using AI-Driven Sentiment Analysis</h2>
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
