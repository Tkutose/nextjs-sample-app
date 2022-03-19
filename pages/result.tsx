import Header from '../components/header'
import Input from '../components/input'

export default function PageWithJSbasedForm() {

    // submitをハンドリング
    const handleSubmit = async (event) => {

        // form送信をストップ
        event.preventDefault()

        // formの情報を取得
        const data = {
            lat: event.target.lat.value,
            lng: event.target.lng.value,
        }

        // JSONに変換
        const JSONdata = JSON.stringify(data)

        // APIエンドポイント
        const endpoint = '/api/form'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        // response取得
        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`緯度:${result.lat} 経度:${result.lng}`)
    }
    
    return (
        <div>
            <Header />
            <h1> What3Words sample </h1>
            <form onSubmit={handleSubmit} >
                <Input place_holder='緯度' name="lat"></Input>
                <Input place_holder='経度' name="lng"></Input>
                <button type="submit" className="py-2 px-4 bg-gray-400 hover:bg-gray-500  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
                    Send
                </button>
            </form >

        </div>
    )
}
