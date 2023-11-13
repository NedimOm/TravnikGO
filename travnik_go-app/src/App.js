import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/App.css';
import  './assets/css/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import ForYou from "./pages/ForYou";
import Calendar from "./pages/Calendar";
import AdminLogin from "./pages/Admin/login";
import AdminEvents from "./pages/Admin/adminEvents";
import AdminLocations from "./pages/Admin/adminLocations";
import AdminTours from "./pages/Admin/adminTours";
import AdminChallenges from "./pages/Admin/adminChallenges";
import Locations from "./pages/Locations";
import Location from "./pages/Location"

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/for_you" element={<ForYou />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/myPlace" element={<Location />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/events" element={<AdminEvents />} />
              <Route path="/admin/locations" element={<AdminLocations />} />
              <Route path="/admin/tours" element={<AdminTours />} />
              <Route path="/admin/challenges" element={<AdminChallenges />} />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
