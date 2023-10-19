import Header from "./components/Header";
import Monthlist from "./components/Monthlist";
import Weather from "./components/Weather";

import "./App.css";

function App() {
  return (
    <div className="App-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="monthlist-container">
        <Monthlist />
      </div>
      <div className="weather-container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
