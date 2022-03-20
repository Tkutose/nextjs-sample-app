import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Input from '../components/input'
import { get3wa } from '../lib/api'

const PageWithJSbasedForm = () => {

  const router = useRouter()

  // submitをハンドリング
  const handleSubmit = async (event) => {

    // form送信をストップ
    event.preventDefault()

    // formの情報を取得
    const data = {
      lat: event.target.lat.value,
      lng: event.target.lng.value,
    }

    // response取得
    const result = await get3wa(event.target.lat.value, event.target.lng.value)

    // cliant側で転送
    router.push({
      pathname: 'result',
      query: {
        address: result.words,
        url: result.map
      }
    })

    // alert(`結果:${result.words}`)

  }

  return (
    <Layout>
      <h1> What3Words sample </h1>
      <form onSubmit={handleSubmit} >
        <Input place_holder='経度' name="lng"></Input>
        <Input place_holder='緯度' name="lat"></Input>
        <button type="submit" className="py-2 px-4 bg-gray-400 hover:bg-gray-500  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
          Send
        </button>
      </form >
    </Layout>
  )
}

export default PageWithJSbasedForm
