import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./routes/Create";
import Main from "./routes/Main";
import Read from "./routes/Read";
import Update from "./routes/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
