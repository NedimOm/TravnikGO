import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/App.css';
import  './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourForYou from "./pages/TourForYou";
import TakeAChallenge from "./pages/TakeAChallenge";
import Calendar from "./pages/Calendar";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route index element={<Calendar />} />
              <Route index element={<TourForYou />} />
              <Route index element={<TakeAChallenge />} />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
