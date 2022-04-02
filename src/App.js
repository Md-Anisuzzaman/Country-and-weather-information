import "./App.css";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries"
import CountryInformation from "./components/CountryInformation/CountryInformation"

function App() {
  return (
    <>
      <div className="header">
        <nav>
        <div className="container">
          <h5>Details Of Countries</h5>
        </div>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:capital" element={<CountryInformation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
