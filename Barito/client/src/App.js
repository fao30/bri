import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import ListDep from "./pages/listDepartments";
// import DepDetail from "./pages/DepartDetail";
// import EmployeeDetail from "./pages/EmployeeDetail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
