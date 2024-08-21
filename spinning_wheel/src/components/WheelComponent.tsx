import React, { FC } from 'react';
import SliceComponent from './SliceComponent'; // Import the SliceComponent

interface Slice {
    id: string;
    value: string;
    wheel_id: string;
    sliceColor: string;
    textColor: string;
    strokeColor: string;
}

interface WheelProps {
    radius: number;
    strokeWidth: number;
    strokeColor: string;
    slices: Slice[];
}

const WheelComponent: FC<WheelProps> = ({ radius, strokeWidth, strokeColor, slices }) => {
    const numSlices = slices.length;
    const sliceAngle = 360 / numSlices;
    const diameter = radius * 2;
    const viewBoxSize = diameter + strokeWidth * 2;

    return (
        <svg
            width={viewBoxSize}
            height={viewBoxSize}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {slices.map((slice, index) => (
                <SliceComponent
                    key={slice.id}
                    radius={radius}
                    strokeWidth={strokeWidth}
                    sliceColor={slice.sliceColor}
                    strokeColor={slice.strokeColor}
                    startAngle={index * sliceAngle}
                    endAngle={(index + 1) * sliceAngle}
                />
            ))}
            <circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill="none"
            />
        </svg>
    );
};

export default WheelComponent;




// import { FC } from 'react';
// import SliceComponent from './SliceComponent';


// interface Slice {
//     id: string;
//     value: string;
//     wheel_id: string;
//     sliceColor: string;
//     textColor: string;
//     strokeColor: string;
// }


// interface WheelProps {
//     radius: number;
//     strokeWidth: number;
//     strokeColor: string;
//     slices: Slice[]
// }

// const WheelComponent: FC<WheelProps> = ({ radius, strokeWidth, strokeColor, slices }) => {

//     const numSlices = slices.length;
//     const sliceAngle = 360 / numSlices;

//     return (
//         <svg
//             width={radius * 2 + strokeWidth * 2}
//             height={radius * 2 + strokeWidth * 2}
//             viewBox={`
//                 -${strokeWidth} 
//                 -${strokeWidth} 
//                 ${radius * 2 + strokeWidth * 2} 
//                 ${radius * 2 + strokeWidth * 2}
//                 `}
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             {slices.map((slice, index) => (
//                 <SliceComponent 
//                 key={slice.id}
//                 radius={radius}
//                 strokeWidth={strokeWidth}
//                 sliceColor={slice.sliceColor}
//                 strokeColor={slice.strokeColor}
//                 startAngle={index * sliceAngle}
//                 endAngle={(index + 1) * sliceAngle}
//                 />
//             ))}
//             <circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius}
//                 stroke={strokeColor}
//                 strokeWidth={strokeWidth}
//                 fill="none"
//             />
//             </svg>

//     // const padding = strokeWidth; // Adjust padding as needed
//     // const diameter = radius * 2;
//     // const viewBoxSize = diameter + padding * 4;

//     // return (
//     //     <svg
//     //         width={viewBoxSize}
//     //         height={viewBoxSize}
//     //         viewBox={`-${padding} -${padding} ${viewBoxSize} ${viewBoxSize}`} 
//     //         xmlns="http://www.w3.org/2000/svg"
//     //     >
//     //         <circle
//     //             cx={radius + padding}
//     //             cy={radius + padding}
//     //             r={radius}
//     //             stroke={strokeColor}
//     //             strokeWidth={strokeWidth}
//     //             fill="none"
//     //         />

//     //     </svg>

//     )
// }

// export default WheelComponent;