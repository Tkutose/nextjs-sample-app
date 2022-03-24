const W3WURL: string = "https://api.what3words.com/v3/convert-to-3wa"
const W3WKEY: string = process.env.NEXT_PUBLIC_API_KEY

export const get3wa = async (lat :number, lng: number) => {    
    const res: any = await fetch(`${W3WURL}?coordinates=${lat}%2C${lng}&language=ja&format=json&key=${W3WKEY}`)
        .catch((err) => {
            console.error(err)
        })
    
    const json = await res.json()
    
    return json
}

