import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPokemon } from '../lib/pokemon'
import React, { useRef, useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring'

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

const PokemonListItem = ({name, image, id}) => {
  const [hoverRef, isHovered] = useHover();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <React.Fragment key={id}>
      <Link href={`/pokemon/${id}`}>
        <animated.div
          ref={hoverRef}
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: isHovered ? 'pointer' : 'default',
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: 5,
            boxShadow: isHovered ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)": "",
            margin: 5,
            textAlign: "center",
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 150,
          }}>
        {formattedName}
        <img src={image} height={100} width={100}/>
        </animated.div>
      </Link>
    </React.Fragment>

  )
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%"
        }}>
          {props.pokemon.map(PokemonListItem)}
        </div>
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
