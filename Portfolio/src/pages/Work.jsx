export default function Work() {
  return (
    <div id="experience" className='flex justify-center items-center montserrat text-gray-50 text-2xl py-20'>
        <div className='xl:space-y-6 px-12 sm:px-24 md:px-32 lg:px-48 xl:px-60 2xl:px-72'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Work Experience</h1>
            <div className='lg:grid lg:grid-cols-6 gap-10 p-4 rounded-xl shadow-2xl drop-shadow-2xl'>
                <div className="col-span-2 text-gray-300">
                    <p className="text-base md:text-lg lg:text-xl">September 2023 - March 2024</p>
                </div>
                <div className='col-span-4 space-y-3'>
                    <div>
                        <p className="font-semibold text-lg md:text-xl lg:text-2xl">Website and Marketing Specialist | iLearnTech UK</p>
                        <p className="text-base md:text-lg lg:text-xl"> Designed and managed the development of iLearnTech's website. Created and executed targeted Facebook advertising campaigns to enhance brand visibility and engagement.</p>
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
  )
}
