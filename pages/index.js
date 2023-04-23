import Head from 'next/head'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BrowserView, MobileView } from 'react-device-detect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geet Patel&#39;s Portfolio</title>
      </Head>

      <main className='bg-slate-600 px-10'>
        <section className='bg-slate-800 min-h-screen text-slate-100'>

          <MobileView>
            <nav className='p-10 flex justify-between'>
              <h1 className='text-4xl'>Geet Patel</h1>
            </nav>
            <div className='p-10 text-xl text-slate-200 text-center'>
              <h1>Please visit the website on desktop!</h1>
            </div>
          </MobileView>

          <BrowserView>
            <nav className='p-10 flex justify-between'>
              <h1 className='text-4xl'>Geet Patel</h1>

              <ul className='flex items-center text-slate-200'>
                <li className='px-3'><a href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer"><FiGithub size={30} /></a></li>
                <li className='px-3'><a href='https://www.linkedin.com/in/geet-p/' title='LinkedIn' target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={35} /></a></li>
                <li><a className='bg-gradient-to-br text-l from-slate-500 to-slate-700 px-6 py-2 rounded-md ml-2' href='./resume.pdf' title='Single-page Resume PDF' target='_blank' rel="noopener noreferrer">Resume</a></li>
              </ul>
            </nav>

            <div className='text-center px-20 py-10'>
              <h2 className='text-3xl text-slate-200'>A developer, a student,</h2>
              <h2 className='text-xl text-slate-400 py-5'>a &#40;self-recognised&#41; mathematician, a home cook, an amatuer tennis player, and a lot more...</h2>
            </div>
            <footer className='text-center text-xl py-20'>
              <p>The page is still under construction!</p>
              <p className='text-slate-400'>But that doesn&#39;t mean you can&#39;t visit my&nbsp;
                <a className='hover:text-slate-300' href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer">Github</a>
                &nbsp;or&nbsp;
                <a className='hover:text-slate-300' href='https://www.linkedin.com/in/geet-p/' title='LinkedIn' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                ,&nbsp;or&nbsp;
                <a className='hover:text-slate-300' href='./resume.pdf' title='Single-page Resume PDF' target='_blank' rel="noopener noreferrer">check out my resume</a>
                !
              </p>
            </footer>
          </BrowserView>
        </section>
      </main>
    </div>
  )
}
