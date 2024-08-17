import { FC } from 'react';

interface WheelProps {
    radius: number;
    strokeWidth: number;
    strokeColor: string;
}

const WheelComponent: FC<WheelProps> = ({ radius, strokeWidth, strokeColor }) => {


    const padding = strokeWidth; // Adjust padding as needed
    const diameter = radius * 2;
    const viewBoxSize = diameter + padding * 4;

    return (
        <svg
            width={viewBoxSize}
            height={viewBoxSize}
            viewBox={`-${padding} -${padding} ${viewBoxSize} ${viewBoxSize}`} 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx={radius + padding}
                cy={radius + padding}
                r={radius}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill="none"
            />

        </svg>
  
   
        

        // <svg
        //     style={{ overflow: 'visible' }}
        //     width={radius * 2}
        //     height={radius * 2}
        //     viewBox={`00 ${radius * 2} ${radius * 2}`}
        //     xmlns="http://www.w3.org/2000/svg" >

        //     <circle
        //         cx={radius}
        //         cy={radius}
        //         r={radius}
        //         stroke={strokeColor}
        //         strokeWidth={strokeWidth}
        //         fill="none"
        //     />
        // </svg >

    )
}

export default WheelComponent;