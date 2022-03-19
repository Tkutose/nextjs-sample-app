import Header from '../components/header'
import XYForm from '../components/XYForm'
import { get3wa } from '../lib/api'

export const getStaticProps = async () => {
  const address = await get3wa()
  
  return {
    props: {
      address: address
    }
  }
}

export default function Home({ address }) {
  return (
    <div>
      <Header />
      <h1> What3Words sample </h1>
      {/* <XYForm></XYForm> */}
      <p>{address.words}</p>

    </div>
  )
}
