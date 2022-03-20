import Input from '../components/input'

export default function xyform() {
    return (
        <form action="result" method="POST">
            <Input place_holder='緯度' name="lat"></Input>
            <Input place_holder='経度' name="lng"></Input>
            <button type="submit" className="py-2 px-4 bg-gray-400 hover:bg-gray-500  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
                Send
            </button>
        </form >
    )
}