import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPokemon } from '../lib/pokemon'


const PokemonListItem = ({name, id}) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <li key={id}>
      <Link href={`/pokemon/${id}`}>
        {formattedName}
      </Link>
    </li>
  )
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This site contains information about the original 151 Pokemon.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ol>
          {props.pokemon.map(PokemonListItem)}
        </ol>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const pokemon = await getPokemon()
  return {
    props: {
      pokemon
    }
  }
}
