import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Body from "./components/Body/Body";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="bg-[#F7FAFF]">
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
