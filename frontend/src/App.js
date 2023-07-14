
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Addauthor from "./Components/Addauthor"
import Addpublisher from "./Components/Addpublisher"
import Admin from "./Components/Admin"
import { Routes, Route } from "react-router-dom"


import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/addpublisher" element={<Addpublisher />} />
        <Route path="/addauthor" element={<Addauthor/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
