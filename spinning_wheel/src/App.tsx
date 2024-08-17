import WheelComponent from "./components/wheel/WheelComponent"
import wheel from "./components/wheel/wheels.json"


function App() {


  return (
    <>
 <h1>its happening</h1>

 <WheelComponent 
 radius={wheel[0].radius} 
 strokeWidth={wheel[0].strokeWidth}
 strokeColor={wheel[0].strokeColor}
 />
    </>
  )
}

export default App
