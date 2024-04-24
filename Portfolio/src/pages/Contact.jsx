export default function Contact() {
  return (
    <div id="contact" className='px-8 xs:px-14 sm:px-20 md:px-28 lg:px-52 xl:px-72  space-y-10 py-20'>
        <div className='space-y-2'>
            <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>Contact Information</h1>
            <div className='ps-2'>
                <h1 className='text-md md:text-lg xl:text-xl'>John Patrick T. Marcellana</h1>
                <h3 className='text-md md:text-lg xl:text-xl'>Las Piñas City</h3>
                <h3 className='text-md md:text-lg xl:text-xl'>jptmarcellana@gmail.com</h3>
                <h3 className='text-md md:text-lg xl:text-xl'>+639561520056</h3>
                <a href='https://www.linkedin.com/in/john-patrick-marcellana-61650224a/' className='block text-md md:text-lg xl:text-xl text-blue-400'>LinkedIn</a>
                <a href='https://github.com/MrRyushi' className='block text-md md:text-lg xl:text-xl text-blue-700'>Github</a>
            </div> 
        </div>
        <div className=''>
            <form className='space-y-2'>
                <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>Send me a message!</h1>
                <input type='email' placeholder='Your email' className='block w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 border border-black rounded-lg p-2'/>
                <textarea type='text' placeholder='Your message' className='w-ful sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 h-28 border border-black rounded-lg p-2'/>
                <button type='submit' className='block border bg-gray-900 text-gray-50 py-3 px-5 rounded-xl hover:bg-gray-700'>Send</button>
            </form>
        </div>
    </div>
  )
}
