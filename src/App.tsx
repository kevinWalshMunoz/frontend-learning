import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/footer'
import Employee from './components/employee'
import Profile from './components/profile'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Footer />
        <Routes>
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
