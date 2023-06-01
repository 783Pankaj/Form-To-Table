import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Firstpage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import ThreedPage from './Components/ThreedPage';
import FourthPage from './Components/FourthPage';
import ResultPage from './Components/ResultPage';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/main/:first' element={<Firstpage />} /> */}
        <Route path='/first' element={<Firstpage />} />
        <Route path='/second' element={<SecondPage />} />
        <Route path='/threed' element={<ThreedPage />} />
        <Route path='fourth' element={<FourthPage />} />
        <Route path='result' element={<ResultPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
