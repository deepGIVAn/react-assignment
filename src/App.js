import EventRequest from "./pages/EventRequest";
import { Route, Routes } from "react-router-dom";
import VenueDetails from "./pages/VenueDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventRequest />} />
      <Route path="/addevent" element={<VenueDetails />} />
    </Routes>
  );
}

export default App;
