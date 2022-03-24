type placeInfo = { clickMethod, placeName: string }

const DataList = (place: placeInfo) => (
    <button
        onClick={place.clickMethod}
        className="w-full text-left bg-gray-200 hover:bg-gray-100 border rounded-xl p-2 mb-4"
    >{place.placeName}</button>
)

export default DataList