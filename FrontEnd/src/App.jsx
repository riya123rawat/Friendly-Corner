import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/Register';
import FloatLogo from './Components/floatImg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FloatLogo />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;