import { useRef, useState } from 'react'
import Layout from '../components/layout'
import Top from '../components/top'
import Result from '../components/result'

const PageWithJSbasedForm = () => {
    const [isSubmit, setIsSubmit] = useState(0)
    const latRef = useRef(null)
    const lngRef = useRef(null)
    
    return (
        <Layout>
            {isSubmit === 0 ? (
                <Top latRef={latRef} lngRef={lngRef} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
            ) : (
                <Result lat={latRef.current.value} lng={lngRef.current.value} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
            )
            }
        </Layout>
    )
}

export default PageWithJSbasedForm
