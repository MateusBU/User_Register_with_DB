import { console } from "node:inspector/promises"

interface ButtonProps{
    color?: 'green' | 'blue' | 'gray',
    className?: string,
    children: any
}

export default function Button(props: ButtonProps){
    const gradientColorsTo = {
        green: 'to-green-700',
        blue: 'to-blue-700',
        gray: 'to-gray-700',
    };
    const gradientColorsFrom = {
        green: 'from-green-400',
        blue: 'from-blue-400',
        gray: 'from-gray-400',
    };

    const color = props.color ?? 'gray';
    const gradientTo = gradientColorsTo[color] ?? 'to-gray-700';
    const gradientFrom = gradientColorsFrom[color] ?? 'to-gray-400';
    
    return(
        <button className={`
            bg-gradient-to-r ${gradientFrom} ${gradientTo}
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}