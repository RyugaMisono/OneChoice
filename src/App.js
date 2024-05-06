import Main from './pages/top-page/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StartAdvice from './pages/consulting/StartAdvice'
import Advisor from './pages/advoisor-list/Advisor'
import About from './pages/about/About'
import SuccessConsul from './pages/consulting/SuccessConsul'

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
