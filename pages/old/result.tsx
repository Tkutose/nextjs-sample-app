import { useRouter } from "next/router"
import Layout from "../../components/layout"

const Result = () => {
    const router = useRouter()

    const top = "https://what3words.com/"

    return (
        <Layout>
            <div className="h-screen">
                <div className="shadow-lg rounded-2xl w-8/12 mt-8 mx-auto h-5/6 p-12 bg-gray-50 dark:bg-gray-800 text-gray-700">
                    <p>結果</p>
                    <div className="flex">
                        <p className="mb-8 text-xl mr-24">{router.query.address}</p>
                    </div>
                    <iframe
                        src={top + router.query.address}
                        height="90%"
                        width="100%"
                    />
                </div>
            </div>

        </Layout>
    )
}

export default Result