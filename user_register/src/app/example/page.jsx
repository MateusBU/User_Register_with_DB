import Header from "@/components/Header"
import Layout from '@/components/Layout';

export default function Example(){
    // in one function cant return two or more elements
    //around div or empty element
    return(
        <Layout title="Using component" color="darkviolet">
            <Header title="Next.js & React" name="xyz" age={32} isNice={true}/>
            <Header title="Learn Next with Mateus"/>
        </Layout>
    )
}