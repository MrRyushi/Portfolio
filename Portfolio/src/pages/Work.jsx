import { useEffect } from "react";
export default function Work() {
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
      id="experience"
      className="flex justify-center items-center montserrat text-gray-50 text-2xl pt-20 pb-10 fade-in"
    >
      <div className="xl:space-y-6 px-12 sm:px-24 md:px-32 lg:px-48 xl:px-60 2xl:px-72">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Work Experience
        </h1>
    
        <div className="lg:grid lg:grid-cols-6 gap-10 p-4 rounded-xl shadow-2xl drop-shadow-2xl">
          <div className="col-span-2 text-gray-300">
            <p className="text-base md:text-lg lg:text-xl ">
              May 2024 - August 2024
            </p>
          </div>
          <div className="col-span-4 space-y-3 ">
            <div className="">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Software Engineering Intern | Snapp Ventures Inc.
              </p>
              <p className="text-base md:text-lg lg:text-xl">
                Conducted QA testing for Matchmo and MatchHome applications.
                Authored and managed content for MatchHome blogs. Developed a
                comprehensive car service booking system. Created pre-filled
                bank application forms to streamline the user experience.
              </p>
            </div>
            <div className="flex gap-2 text-sm md:text-base lg:text-lg">
              <p className="bg-teal-950 p-2 rounded-lg">NextJS</p>
              <p className="bg-teal-950 p-2 rounded-lg">Tailwind CSS</p>
              <p className="bg-teal-950 p-2 rounded-lg">Git</p>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-6 gap-10 p-4 rounded-xl shadow-2xl drop-shadow-2xl">
          <div className="col-span-2 text-gray-300">
            <p className="text-base md:text-lg lg:text-xl ">
              September 2023 - March 2024
            </p>
          </div>
          <div className="col-span-4 space-y-3 ">
            <div className="">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Website and Marketing Specialist | iLearnTech UK
              </p>
              <p className="text-base md:text-lg lg:text-xl">
                {" "}
                Designed wireframes and UI layouts in Figma, ensuring responsive, user-friendly interfaces 
                aligned with brand guidelines. Developed the initial website draft in WordPress, implementing custom themes and plugins to 
                improve navigation and functionality
              </p>
            </div>
            <div className="flex gap-2 text-sm md:text-base lg:text-lg">
              <p className="bg-teal-950 p-2 rounded-lg">Facebook Ads</p>
              <p className="bg-teal-950 p-2 rounded-lg">Figma</p>
              <p className="bg-teal-950 p-2 rounded-lg">Hostinger</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
