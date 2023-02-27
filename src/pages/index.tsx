import Layout from '@/site/components/Layout'
import { ArtDisplay } from '@/site/components/Sections/ArtDisplay/ArtDisplay'
import { Header } from '@/site/components/Sections/Header/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | Casiar Art Store</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout prenav navbar footer>
        <ArtDisplay />
        <Header />
      </Layout>
    </>
  )
}
