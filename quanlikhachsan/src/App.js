import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import Local from "./pages/Local";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="*" element={<Protected Cmp={Dashboard} />} /> */}
          <Route path="*" element={<Protected Cmp={Local} />} />

          {/* <Route path="*" element={<Dashboard />} /> */}

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
