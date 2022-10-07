import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
   <Router>
        <Routes>
          <Route path='/login' element={<LoginPage></LoginPage>}/>
          <Route path='/' element={<Dashboard></Dashboard>}/>
        </Routes>
      </Router>
)}
export default App;
