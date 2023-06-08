import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import MainPage from './Components/MainPage';
// import Firstpage from './Components/FirstPage';
// import SecondPage from './Components/SecondPage';
// import ThreedPage from './Components/ThreedPage';
// import FourthPage from './Components/FourthPage';
// import ResultPage from './Components/ResultPage';
// import Time from './Components/Time';
import Quizgame from './Quizgame';


function App() {

  return (
    // <div>
    //   <Time />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<MainPage />} />
    //     {/* <Route path='/main/:first' element={<Firstpage />} /> */}
    //     <Route path='/first' element={<Firstpage />} />
    //     <Route path='/second' element={<SecondPage />} />
    //     <Route path='/threed' element={<ThreedPage />} />
    //     <Route path='fourth' element={<FourthPage />} />
    //     <Route path='result' element={<ResultPage />} />
    //     </Routes>
    // </BrowserRouter>
    // </div>
    <div>
      <Quizgame />
    </div>
  );
}
export default App;
