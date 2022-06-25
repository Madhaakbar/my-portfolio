import "./App.css";
import TopBar from "./components/navigation/Top_Bar";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import "./components/navigation/Navbar.css";
import "./components/navigation/Top_Bar.css";
import "./components/home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <TopBar />
        <Navbar />
      </div>
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
