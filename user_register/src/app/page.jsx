import Link from "next/link";
import Browser from "@/components/Browser";

export default function start(){
    //"<h1>Title</h1>""
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Browser color="aqua" text="Stylish" destination="/stylish"/>
            <Browser color="darkviolet" text="Example" destination="/example"/>
            <Browser color="#00ff48" text="JSX" destination="/test/jsx"/>
        </div>
    );
}