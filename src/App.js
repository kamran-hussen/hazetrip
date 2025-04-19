import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FlightSearchResult from "./pages/FlightSearchResult";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-search-result" element={<FlightSearchResult />} />
        </Routes>
      </Router>
  );
}

export default App;
