import AddConfessionPost from "./components/AddConfessionPost";
import ConfessionList from "./components/ConfessionList";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
function App() {
  return (
    <div>
    
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
