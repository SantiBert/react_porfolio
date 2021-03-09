import Link from "next/link";
import Layout from "../components/layout";


const custom404 = () => (
    <Layout>
        <h1>404</h1>
        <p>Esta página no existe vuelve al <Link href="/"><a> Home </a></Link></p>
    </Layout>
)

export default custom404;