import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ToothpasteDiagnosis from './pages/ToothpasteDiagnosis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<ToothpasteDiagnosis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
