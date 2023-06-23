import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Poster from './components/Poster'
import Companies from './components/Companies'
import JobDesciption from './components/JobDesciption'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Navbar />
     <Poster />
     <JobDesciption />
     <Companies />
     <Footer />
    </main>
  )
}
