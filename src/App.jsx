import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Greeting from "./components/Greeting";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Greeting message={"We love PEDRAZO"}/>
    </div>
  );
}

export default App;
