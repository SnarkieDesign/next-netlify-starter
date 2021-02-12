import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ charmander }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <h2>{charmander.name}</h2>
        <img src={charmander.sprites.front_default} alt="image-standard" />
        <Image src={charmander.sprites.front_default} alt="image-next" width={96} height={96} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const charmanderPromise = fetch('https://pokeapi.co/api/v2/pokemon/charmander').then((res) => res.json());
  const charmander = await charmanderPromise;

  return {
    props: {
      charmander
    }
  }
}