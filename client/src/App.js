import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartAdvice from './components/StartAdvice';
import Advisor from './components/Advisor';
import About from './components/About';
import SuccessConsul from './components/SuccessConsul';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="start" element={<StartAdvice />}/>
        <Route path="about" element={<About />}/>
        <Route path="advisor" element={<Advisor />}/>
        <Route path="success" element={<SuccessConsul />}/>
      </Routes>
    </Router>
  );
}

export default App;
