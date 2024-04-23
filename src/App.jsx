import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Screenshot from "./pages/screenshot";
import Cloudinary from "./pages/cloudinary";
import CloudinaryImage from "./pages/fetchImage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screenshot/>} />
        <Route path="/upload" element={<Cloudinary/>} />
        <Route path="/fetch" element={<CloudinaryImage/>} />
      </Routes>
    </Router>
  );
}

export default App;
