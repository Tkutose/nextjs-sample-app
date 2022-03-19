const W3WURL: string = "https://api.what3words.com/v3/convert-to-3wa"
const W3WKEY: string = "7VIMFSG4"

export const get3wa = async () => {
    const lat = 34.645772
    const lng = 133.889950
    const res:any = await fetch(`${W3WURL}?coordinates=${lat}%2C${lng}&language=ja&format=json&key=${W3WKEY}`)
        .catch((err) => {
            console.error(err)
        })
    
    const json = await res.json()
    
    return json
}
