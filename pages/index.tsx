import { useRouter } from 'next/router'
import { useRef } from 'react'
import Layout from '../components/layout'
import Explain from '../components/explain'
import Input from '../components/input'
import { get3wa } from '../lib/api'

const PageWithJSbasedForm = () => {
  const router = useRouter()

  const latRef = useRef(null)
  const lngRef = useRef(null)
  const latSample = 34.645847
  const lngSample = 133.8899

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
        address: result.words
      }
    })
  }

  const handleOnclick = (event) => {
    latRef.current.value = latSample
    lngRef.current.value = lngSample
  }

  return (
    <Layout>
      <div className="flex">
        
        <div className="shadow-lg rounded-2xl w-5/12 ml-auto mr-1 mt-4 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
          <p className="text-3xl mb-3 -ml-2">Generator</p>
          <p className="text-gray-600 mt-2 mb-4"> 緯度経度をwhat3wordsのアドレスに変換します </p>
          <form onSubmit={handleSubmit} className="w-8/12 ml-12 p-4" >
            <Input placeHolder='経度' name="lng" numRef={lngRef}></Input>
            <Input placeHolder='緯度' name="lat" numRef={latRef}></Input>
            <div className="flex">
            <button type="submit" className="py-2 px-4 bg-gray-600 hover:bg-gray-800 my-0 mr-0 ml-auto text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
              Send
            </button>
            </div>
          </form >
        </div>

        <div className="shadow-lg rounded-2xl w-3/12 mr-auto ml-1 mt-4 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
          <button onClick={handleOnclick} className="">test data</button>
        </div>
      
      </div>
      <Explain />
    </Layout>
  )
}

export default PageWithJSbasedForm
