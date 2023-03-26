import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'




export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Drimer | Front-end developer</title>
        <meta name="description" content="Andrés Drimer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-ad.ico" />
      </Head>
      
      <Navbar />
    </>
  )
}
