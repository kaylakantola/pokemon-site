import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import TypeShowcase from '../../components/typeShowcase'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isValidating } = useSWR(`/api/pokemon/${id}`, fetcher)

  if (error) {
    console.log({error})
    return (
      <Layout>
        NOT FOUND!
      </Layout>
    )
  }

  if (isValidating) {
    return (
      <Layout>
        LOADING!
      </Layout>
    )
  }

  const {name, image, types} = data
  return (
    <Layout>
      <p>Name: {name}</p>
      <br />
      <p>Id: {id}</p>
      <br />
      <p>Photo:</p>
      <img src={image} height={100} width={100} />
      <br />
      <p>Types:</p>
      {types.map(type => <div id={type}><TypeShowcase type={type} /></div>)}
    </Layout>
  )
}




export default Pokemon