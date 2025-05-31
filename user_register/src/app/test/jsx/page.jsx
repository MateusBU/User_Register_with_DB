import Layout from '@/components/Layout';

export default function Jsx(){
    const a = 1;
    const b = 3;
    console.log(a + b);
    
    const obj = {name: 'Jonas', age: 30};
    
    const subtitle = <h3>JSX subtitle</h3>

    function subtitle2(){
        return (<h4>JSX sub-subtitle</h4>);
    }

    return(
        <Layout title="Understanding JSX" color="#00ff48">
            <div>
                <h1>JSX</h1>
                a + b = {a + b}
                <h2>
                    {Math.random()}
                </h2>
                <p>
                    {JSON.stringify(obj)}
                </p>
                    {obj.name}
                    {obj.age}
                {subtitle}
                {subtitle2()}
            </div>
        </Layout>
    )
}