import axios from "axios"

const W3WURL: string = "https://api.what3words.com/v3/convert-to-3wa"
const W3WKEY: string = process.env.NEXT_PUBLIC_API_KEY

export const get3wa = async (lat :number, lng: number) => {    
    const { data } = await axios.get(W3WURL, {
        params: {
            coordinates: `${lat},${lng}`,
            language: "ja",
            format: "json",
            key:`${W3WKEY}`
        },
    })    
    return data
}
