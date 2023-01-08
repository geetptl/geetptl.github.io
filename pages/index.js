import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { MdPictureAsPdf } from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geet Patel&apos;s Portfolio</title>
      </Head>

      <main className='bg-slate-600 px-10'>
        <section className='bg-slate-800 min-h-screen text-slate-100'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-4xl'>Geet Patel</h1>
            <ul className='flex items-center text-slate-200'>
              <li className='px-2'><a href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer"><FiGithub size={30} /></a></li>
              <li className='px-2'><a href='https://www.linkedin.com/in/geet-p/' title='Linkedin' target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={40} /></a></li>
              <li><a className=' bg-gradient-to-br from-slate-500 to-slate-700 px-4 py-2 rounded-md ml-2' href='./resume.pdf' title='Single-page Resume' target='_blank' rel="noopener noreferrer">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center px-20 py-10'>
            <h2 className='text-3xl text-slate-200'>A Developer, a student,</h2>
            <h2 className='text-s text-slate-400 py-5'>an informal mathematician, a home cook, an amatuer tennis player, and a lot more...</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
