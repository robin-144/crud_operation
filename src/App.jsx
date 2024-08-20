import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate"
import EmpEdit from  "./components/EmpEdit"
import EmpDetails from "./components/EmpDetails"


function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center">React CRUD Operation</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} /> 
          <Route path="/employee/create" element={<EmpCreate />} /> 
          <Route path="/employee/edit/:empId" element={<EmpEdit />} /> 
          <Route path="/employee/details/:empId" element={<EmpDetails />} /> 
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
