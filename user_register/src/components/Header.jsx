export default function Header(props){
    //props are read only

    // console.log(props);
    // console.log(props.title);
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}