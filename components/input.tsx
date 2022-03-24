
type InputInfo = { placeHolder: string, name: string, numRef}

export default function Input( info: InputInfo ) {
    return (
        <div className=" relative ">
            <label className="text-gray-700">
                {info.placeHolder}
            </label>

            <input
                type="number"
                step="0.0000000001"
                ref={info.numRef}
                name={info.name} 
                required
                className="rounded-lg border-transparent w-full flex-1 appearance-none border border-gray-300 py-2 px-4 my-4 mx-1 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" 
                />
        </div>
    )
}