import Header from "@/components/Header"
export default function Example(){
    // in one function cant return two or more elements
    //around div or empty element
    return(
        <>
            <Header title="Next.js & React" name="xyz" age={32} isNice={true}/>
            <Header title="Learn Next with Mateus"/>
        </>
    )
}