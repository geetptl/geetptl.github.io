import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {FaGithubSquare} from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geet Patel&apos;s Portfolio</title>
      </Head>

      <main className='bg-slate-600 px-10'>
        <section className='bg-slate-900 min-h-screen text-rose-100'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Geet Patel</h1>
            <ul className='flex items-center'>
              <li><FaGithubSquare size={40}/></li>
              <li><a className=' bg-gradient-to-br from-slate-500 to-slate-700 text-rose-300 px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
