import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import TypeShowcase from '../../components/typeShowcase'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const PokemonCard = ({data}) => {
  const {name, image, types, id} = data
  const idOk = id && parseInt(id)>0 && parseInt(id)<152
  const bgImg = idOk ? `/images/${id}.jpg` : null

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center",}}>
      <div style={{
        width: 350,
        border: "1px solid black",
        borderRadius: 10,
        padding: 20,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        backgroundImage: `url(${bgImg})`, backgroundPosition: "center", backgroundSize: "cover",

      }}
      >
        <div style={{
          width: "100%",
          display: 'flex',
          flexDirection: "row",
          justifyContent: 'space-between',

        }}>
          <p style={{
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: 5,
            padding: 5,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}>{name.toUpperCase()}</p>
          <p style={{
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: 5,
            padding: 5,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}>ID: {id}</p>
        </div>
        <div style={{
          width: '100%',
          display: "flex",
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: 5,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              margin:30
            }}
          >
            <img src={image} height={150} width={150}/>
          </div>

        </div>
        <div style={{
          width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", textAlign: 'center',
          alignItems: 'center',
          justifyContent: types.length > 1 ? 'space-between' : 'center',
          marginTop: 10
        }}>
          {types.map(type => (
              <div key={type} style={{width: "45%"}}>
                <TypeShowcase type={type}/>
              </div>
            )
          )
          }
        </div>
      </div>
    </div>)
};

const Pokemon = () => {
  const router = useRouter()
  const {id} = router.query

  const {data, error, isValidating} = useSWR(`/api/pokemon/${id}`, fetcher)

  if (error) {
    console.log({error})
    return (
      <Layout id={id}>
        NOT FOUND!
      </Layout>
    )
  }

  if (isValidating) {
    return (
      <Layout id={id}>
        LOADING!
      </Layout>
    )
  }
  return (
    <Layout id={id}>
      <PokemonCard data={{...data, id}}/>
    </Layout>
  )
}


export default Pokemon