export default function Contact() {
  return (
    <div className='px-72 space-y-10'>
        <div className='space-y-2'>
            <h1 className='font-bold text-3xl'>Contact Information</h1>
            <div className='ps-2'>
                <h1 className='text-xl'>John Patrick T. Marcellana</h1>
                <h3 className='text-xl'>jptmarcellana@gmail.com</h3>
                <h3 className='text-xl'>+639561520056</h3>
                <a href='https://www.linkedin.com/in/john-patrick-marcellana-61650224a/' className='block text-xl text-blue-400'>LinkedIn</a>
                <a href='https://github.com/MrRyushi' className='block text-xl text-blue-700'>Github</a>
            </div> 
        </div>
        <div className=''>
            <form className='space-y-2'>
                <h1 className='font-bold text-3xl'>Send me a message!</h1>
                <input type='email' placeholder='Your email' className='block w-1/2 border border-black rounded-lg p-2'/>
                <textarea type='text' placeholder='Your message' className='w-1/2 h-28 border border-black rounded-lg p-2'/>
                <button type='submit' className='block border bg-slate-900 text-slate-50 py-3 px-5 rounded-xl hover:bg-slate-700'>Send</button>
            </form>
        </div>
    </div>
  )
}
