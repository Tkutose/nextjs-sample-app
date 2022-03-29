import Head from 'next/head'
import Header from './header'
import { NextPage } from 'next'

type Props = {
    children?: React.ReactNode;
    home?: boolean;
};

const Layout: NextPage<Props> = ({ children, home }: Props) => (
    <div>
        <Head>
            <title>sample next.js app</title>
        </Head>
        <main>
            {children}
        </main>
    </div>
    )   


export default Layout