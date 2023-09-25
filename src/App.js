import "./App.css";
import Body from "./component/Body";
import Navbar from "./component/Navbar";
import Bottom from "./component/Bottom";

function App() {
  return (
    <div className="container">
      <Body></Body>
      <Navbar></Navbar>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
