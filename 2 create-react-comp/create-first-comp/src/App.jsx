import Hello from "./hello";
import Kgbutton from "./kgbutton";
import Random from "./random";

// this is functional component because components are defined in function()
function App(){
  return <div>
  <h1>This is best course</h1>
  <Kgbutton></Kgbutton>
  <Hello></Hello>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  </div>
}
export default App;