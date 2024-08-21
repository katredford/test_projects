import React from 'react';

interface SliceProps {
    radius: number;
    strokeWidth: number;
    sliceColor: string;
    strokeColor: string;
    startAngle: number;
    endAngle: number;
}

const SliceComponent: React.FC<SliceProps> = ({ radius, strokeWidth, sliceColor, strokeColor, startAngle, endAngle }) => {
    const toRadians = (angle: number) => (angle * Math.PI) / 180;

    const getSlicePath = () => {
        const startX = radius + radius * Math.cos(toRadians(startAngle));
        const startY = radius - radius * Math.sin(toRadians(startAngle));
        const endX = radius + radius * Math.cos(toRadians(endAngle));
        const endY = radius - radius * Math.sin(toRadians(endAngle));

        // The path data string needs to create a pie slice
        return `
            M ${radius} ${radius}
            L ${startX} ${startY}
            A ${radius} ${radius} 0 0 1 ${endX} ${endY}
            Z
        `;
    };

    return (
        <path
            d={getSlicePath()}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill={sliceColor}
        />
    );
};

export default SliceComponent;




// import { FC } from 'react';

// interface SliceProps {
//     radius: number;
//     strokeWidth: number;
//     sliceColor: string;
//     strokeColor: string;
//     startAngle: number;
//     endAngle: number;
// }

// const SliceComponent: FC <SliceProps> = ({radius, strokeWidth, sliceColor, strokeColor, startAngle, endAngle}) => {

//     const getSlicePath = () => {
//         const startX = radius + Math.cos((Math.PI / 180) * startAngle);
//         const startY = radius - radius *  Math.sin((Math.PI / 180) * startAngle);
//         const endX = radius + radius * Math.cos((Math.PI / 180) * endAngle);
//         const endY = radius - radius * Math.sin((Math.PI / 180) * endAngle);

//         return `
//         M ${radius} ${radius}
//         L ${startX} ${startY}
//         A ${radius} ${radius} 0 0 1 ${endX} ${endY}
//         Z
//         `;
//     };

//     return(
//         <path
//             d={getSlicePath()}
//             stroke={strokeColor}
//             strokeWidth={strokeWidth}
//             fill={sliceColor}
//         />
//     );
// };

// export default SliceComponent