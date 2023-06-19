import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NewStudentForm from "./pages/NewStudentForm";
import UpdateStudentForm from "./pages/UpdateStudentForm";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
        <p className="title" onClick={()=> navigate("/")}>SpaceX Institute</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<NewStudentForm />} />
        <Route path="/updateUser/:studentId" element={<UpdateStudentForm />} />
      </Routes>
    </div>
  );
}

export default App;
