import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
          {/* <Route path="*" element={<Protected Cmp={Dashboard} />} /> */}
          <Route path="*" element={<Dashboard />} />

          

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
