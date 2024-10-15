import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import AuthForm from './Components/AuthForm';
import Footer from './Components/Footer';

import FloatLogo from './Components/floatImg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FloatLogo />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Login" element={<AuthForm />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;