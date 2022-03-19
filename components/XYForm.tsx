import Input from './input'

export default function xyForm () {
    return (
        <form>
            <Input place_holder={"緯度"}></Input>
            <Input place_holder={"経度"}></Input>
            <button type="submit" className="py-2 px-4 bg-gray-400 hover:bg-gray-500  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
                Send
            </button>
        </form >
    )
}