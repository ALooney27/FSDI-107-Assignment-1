import "./App.css";
import { React } from "react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";

function App() {
  return (
    <div className="App">
      <NavBar />

      <QuantityPicker />

      <Footer />
    </div>
  );
}

export default App;
