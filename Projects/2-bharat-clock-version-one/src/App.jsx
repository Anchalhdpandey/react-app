import "./App.css";
import Clockheading from "./components/clockheading";
import Clockslogan from "./components/clockslogan";
import CurrentTime from "./components/currenttime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Clockheading></Clockheading>
      <Clockslogan></Clockslogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
