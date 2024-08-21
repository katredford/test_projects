import WheelComponent from "./components/WheelComponent"
import wheel from "./components/wheels.json"


// function App() {


//   return (
//     <>
//       <h1>its happening</h1>

//       <WheelComponent
//         radius={wheel[0].radius}
//         strokeWidth={wheel[0].strokeWidth}
//         strokeColor={wheel[0].strokeColor}
//       />
//     </>
//   )
// }

// export default App

const App: React.FC = () => {
  const { radius, strokeWidth, strokeColor, values: slices } = wheel[0];

  return (
      <><h1>It's happening</h1><WheelComponent 
              radius={radius} 
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              slices={slices}
          /></>
  );
};

export default App;