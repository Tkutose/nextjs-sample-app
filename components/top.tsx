import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import Explain from './explain'
import Input from './input'
import DataList from './dataList'
import Header from "./header"

type topInfo = {
    latRef: MutableRefObject<any>,
    lngRef: MutableRefObject<any>,
    isSubmit: number,
    setIsSubmit: Dispatch<SetStateAction<number>>
}

const Top = (topInfo: topInfo) => {

    const handleOnclick = (lat, lng) => {
        topInfo.latRef.current.value = lat
        topInfo.lngRef.current.value = lng
    }

    const clickSampleOkayama = () => {
        handleOnclick(34.645847, 133.8899)
    }

    const clickSampleKyoto = () => {
        handleOnclick(34.9861964, 135.7589634)
    }

    const clickSampleTokyo = () => {
        handleOnclick(35.659053, 139.700628)
    }

    return (
        <>
            <Header setIsSubmit={topInfo.setIsSubmit}/>
            <div className="flex">

                <div className="shadow-lg rounded-2xl w-4/12 ml-auto mr-1 mt-4 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
                    <p className="text-3xl mb-3 -ml-2">Generator</p>
                    <p className="text-gray-600 mt-2 mb-4"> 緯度経度をwhat3wordsのアドレスに変換します </p>
                    <form onSubmit={() => topInfo.setIsSubmit(1)} className="w-8/12 ml-12 p-4" >
                        <Input placeHolder='経度' name="lng" numRef={topInfo.lngRef}></Input>
                        <Input placeHolder='緯度' name="lat" numRef={topInfo.latRef}></Input>
                        <div className="flex">
                            <button type="submit" className="py-2 px-4 bg-gray-600 hover:bg-gray-800 my-0 mr-0 ml-auto text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 rounded-lg ">
                                Send
                            </button>
                        </div>
                    </form >
                </div>

                <div className="shadow-lg rounded-2xl w-4/12 mr-auto ml-1 mt-4 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
                    <p className="text-3xl mb-3 -ml-2">Test Data</p>
                    <p className="text-gray-600 mt-2 mb-4">場所名を使って緯度経度を自動入力します</p>
                    <div className='flex-col'>
                        <DataList clickMethod={clickSampleOkayama} placeName="スターバックス岡山中仙道店 店舗入口" />
                        <DataList clickMethod={clickSampleKyoto} placeName="京都駅 中央口 入口" />
                        <DataList clickMethod={clickSampleTokyo} placeName="ハチ公前" />
                    </div>
                </div>

            </div>
            <Explain />
        </>
    )
}

export default Top