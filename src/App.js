import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home"
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Form from "./component/Applyform/ApplyForm"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
