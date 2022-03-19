type InputInfo = {place_holder:string, name:string}

export default function input( info: InputInfo ) {
    return (
        <div className=" relative ">
            <label className="text-gray-700">
                {info.place_holder}
            </label>

            <input 
                type="number"
                name={info.name} 
                required
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 my-4 mx-1 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" 
                />
        </div>
    )
}