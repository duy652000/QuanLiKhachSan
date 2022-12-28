import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Protected from "./components/Protected";
import Local from "./pages/Local";
import { AppProvider } from "./Context/AppContext";
import OverLoad from "./components/OverLoad";



function App() {
  return (
    <BrowserRouter>
      <OverLoad>
        <div className="App">
           {/* <AppProvider> */}
          <Routes>
            <Route path="*" element={<Protected Cmp={Local} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
            {/* </AppProvider> */}
        </div>
      </OverLoad>
    </BrowserRouter>
  );
}
export default App;
