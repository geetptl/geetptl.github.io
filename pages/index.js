import Head from 'next/head'
import { AiOutlineDown } from 'react-icons/ai'
import { FiCopy, FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BrowserView, MobileView } from 'react-device-detect';
import React, { useState } from 'react'

export default function Home() {
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  const handleEmailClick = () => {
    setShowEmailAlert(true);
    setTimeout(() => {
      setShowEmailAlert(false);
    }, 2000);
  };

  const [showKnowMoreAlert, setKnowMoreAlert] = useState(false);

  const handleKnowMoreClick = () => {
    setKnowMoreAlert(true);
    setTimeout(() => {
      setKnowMoreAlert(false);
    }, 2000);
  };

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
              <h1 className='text-4xl'></h1>

              <ul className='flex items-center text-slate-200'>
                <li className='px-3 transition ease-in-out hover:scale-110'><a href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer"><FiGithub size={30} /></a></li>
                <li className='px-3 transition ease-in-out hover:scale-110'><a href='https://www.linkedin.com/in/geet-p/' title='LinkedIn' target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={35} /></a></li>
                <li className='transition ease-in-out hover:scale-110'><a className='bg-gradient-to-br text-l from-slate-500 to-slate-700 px-6 py-2 rounded-md ml-2' href='./resume.pdf' title='Single-page Resume PDF' target='_blank' rel="noopener noreferrer">Resume</a></li>
              </ul>
            </nav>

            <div className='text-left py-10 px-40 text-4xl text-slate-200'>
              <text className=''>Hello there!</text>
            </div>

            <div className='text-left px-40 text-3xl text-slate-300 mt-5 space-y-5 w-4/5 max-w-[3/5]'>
              <p>I am Geet Patel. I am a grad student in Computer Science at Rutgers.</p>
              <p>I am passionate about developing scalable backend solutions and robust cloud infrastructure.</p>
              <p>But that&apos;s barely scratching the surface.</p>
            </div>

            <div className='text-left px-40 fixed bottom-20 text-slate-200 space-y-10'>
              <p>
                <text className='text-lg'>Get in touch</text>
                <button className='text-sm align-top px-2 py-1 rounded-md ml-2 transition ease-in-out delay-100 bg-gradient-to-br text-l from-white to-gray-200 text-blue-700 hover:scale-110 hover:translate-x-2 duration-300' onClick={handleEmailClick}>geetpofficial@gmail.com</button>
              </p>
              {
                showEmailAlert && (
                  <div className='fixed bottom-10 right-20 bg-teal-800 text-teal-200 px-3 py-2 rounded animate-fade-in-out'>
                    Email copied!
                  </div>
                )
              }
              <button className='text-slate-200 text-xl' onClick={handleKnowMoreClick}>
                Or know me better<AiOutlineDown size={30} />
              </button>
              {
                showKnowMoreAlert && (
                  <div className='fixed bottom-10 right-20 bg-red-500 text-red-200 px-3 py-2 rounded animate-fade-in-out'>
                    That's under construction!
                  </div>
                )
              }
            </div>
        </BrowserView>
      </section>
    </main>
    </div >
  )
}
