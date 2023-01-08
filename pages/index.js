import Head from 'next/head'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

// const Tabs = ({ }) => {
//   const [openTab, setOpenTab] = React.useState(1);
//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full">
//           <ul
//             className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-4"
//             role="tablist"
//           >
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center px-2">
//               <a
//                 className={
//                   "text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 1
//                     ? "text-white bg-slate-600"
//                     : "text-slate-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(1);
//                 }}
//                 data-toggle="tab"
//                 href="#link1"
//                 role="tablist"
//               >
//                 Profile
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center px-2">
//               <a
//                 className={
//                   "text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 2
//                     ? "text-white bg-slate-600"
//                     : "text-slate-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(2);
//                 }}
//                 data-toggle="tab"
//                 href="#link2"
//                 role="tablist"
//               >
//                 Settings
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center px-2">
//               <a
//                 className={
//                   "text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 3
//                     ? "text-white bg-slate-600"
//                     : "text-slate-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(3);
//                 }}
//                 data-toggle="tab"
//                 href="#link3"
//                 role="tablist"
//               >
//                 Options
//               </a>
//             </li>
//           </ul>
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="px-4 py-5 flex-auto">
//               <div className="tab-content tab-space">
//                 <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                   <p>
//                     Collaboratively administrate empowered markets via
//                     plug-and-play networks. Dynamically procrastinate B2C users
//                     after installed base benefits.
//                     <br />
//                     <br /> Dramatically visualize customer directed convergence
//                     without revolutionary ROI.
//                   </p>
//                 </div>
//                 <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                   <p>
//                     Completely synergize resource taxing relationships via
//                     premier niche markets. Professionally cultivate one-to-one
//                     customer service with robust ideas.
//                     <br />
//                     <br />
//                     Dynamically innovate resource-leveling customer service for
//                     state of the art customer service.
//                   </p>
//                 </div>
//                 <div className={openTab === 3 ? "block" : "hidden"} id="link3">
//                   <p>
//                     Efficiently unleash cross-media information without
//                     cross-media value. Quickly maximize timely deliverables for
//                     real-time schemas.
//                     <br />
//                     <br /> Dramatically maintain clicks-and-mortar solutions
//                     without functional solutions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default function Home() {
  return (
    <div>
      <Head>
        <title>Geet Patel&#39;s Portfolio</title>
      </Head>

      <main className='bg-slate-600 px-10'>
        <section className='bg-slate-800 min-h-screen text-slate-100'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-4xl'>Geet Patel</h1>
            <ul className='flex items-center text-slate-200'>
              <li className='px-2'><a href='https://github.com/geetptl' title='Github' target="_blank" rel="noopener noreferrer"><FiGithub size={30} /></a></li>
              <li className='px-2'><a href='https://www.linkedin.com/in/geet-p/' title='Linkedin' target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={40} /></a></li>
              <li><a className='bg-gradient-to-br from-slate-500 to-slate-700 px-4 py-2 rounded-md ml-2' href='./resume.pdf' title='Single-page Resume' target='_blank' rel="noopener noreferrer">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center px-20 py-10'>
            <h2 className='text-3xl text-slate-200'>A developer, a student,</h2>
            <h2 className='text-s text-slate-400 py-5'>a &#40;self-recognised&#41; mathematician, a home cook, an amatuer tennis player, and a lot more...</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
