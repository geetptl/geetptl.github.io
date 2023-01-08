import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geet Patel&apos;s Portfolio</title>
      </Head>

      <main className='bg-slate-600 px-10'>
        <section className='bg-slate-800 min-h-screen text-rose-100'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-4xl'>Geet Patel</h1>
            <ul className='flex items-center'>
            <li className='px-2'><a href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer"><FaGithubSquare size={40} /></a></li>
              <li className='px-2'><a href='https://www.linkedin.com/in/geet-p/' title='Linkedin' target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} /></a></li>
              <li><a className=' bg-gradient-to-br from-slate-500 to-slate-700 px-4 py-2 rounded-md ml-2' href='./resume.pdf' title='Single-page Resume' target='_blank' rel="noopener noreferrer">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
