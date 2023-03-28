import Head from 'next/head'

//components
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'


import data from '../../data'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Drimer | Front-end developer</title>
        <meta name="description" content="Andrés Drimer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoAD2023-4.ico" />
      </Head>
  
      <Navbar />
      <Main data={data} />
      <About data={data} />
      <Skills data={data} />
      <Projects data={data} />
    </>
  )
}
