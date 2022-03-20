import { useRouter } from "next/router"
import Layout from "../components/layout"

const result = () => {
    const router = useRouter()

    const top = "https://what3words.com/"

    return (
        <Layout>
            <p>結果</p>
            <p>{router.query.address}</p>
            <div className="w-1/2 h-96">
            <iframe 
                src={top + router.query.address}
                height="100%"
                width="100%"
            />
            </div>
        </Layout>
    )
}

export default result