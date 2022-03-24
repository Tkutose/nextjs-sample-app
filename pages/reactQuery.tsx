import { NextPage } from "next"
import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const ReactQuery: NextPage = () => {
    const query = "nextjs"

    const { data, isLoading } = useQuery("qiita", async () => {
        const { data } = await axios.get("https://qiita.com/api/v2/items", {
            params: {
                page: "1",
                per_page: "20",
                query: query,
            },
        })
        return data
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!data) {
        return <p>Error Occured</p>
    }

    return (
        <div>
            <ul>
                {data?.map((item: any, index: number) => {
                    return <li key={index}>{item.title}</li>
                })}
            </ul>
        </div>
)
}

export default ReactQuery