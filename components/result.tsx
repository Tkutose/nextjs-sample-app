import { Dispatch, SetStateAction } from "react"
import { useQuery } from "react-query"
import { get3wa } from "../lib/api"
import Header from "./header"

type resultInfo = {
    lat: number,
    lng: number,
    isSubmit: number,
    setIsSubmit: Dispatch<SetStateAction<number>>
}

const Result = (result: resultInfo) => {
    const top = "https://what3words.com/"

    const { data, isLoading } = useQuery(`${result.lat},${result.lng}`, async () => {
        const data = await get3wa(result.lat, result.lng)                
        return data
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!data) {
        return <p>Error Occured</p>
    }


    return (
        <>
            <Header setIsSubmit={result.setIsSubmit} />
            <div className="h-screen">
                <div className="shadow-lg rounded-2xl w-8/12 mt-8 mx-auto h-5/6 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
                    <p>結果</p>
                    <div className="flex">
                        <p className="mb-8 text-xl mr-24">{data.words}</p>
                    </div>
                    <iframe
                        src={top + data.words}
                        height="90%"
                        width="100%"
                    />
                </div>
            </div>
        </>
    )
}

export default Result