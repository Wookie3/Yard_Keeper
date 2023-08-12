import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandscapeDesign from './components/LandscapeDesign.jsx';
import Services from './components/Services.jsx';
import LandingPage from './components/LandingPage.jsx';
import Schedule from './components/Schedule.jsx';


const App = () => {
  
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/design" element={<LandscapeDesign/>} />
          {/* <Route path="*" element={<NoPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
};

export default App;