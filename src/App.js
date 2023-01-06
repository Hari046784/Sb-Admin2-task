import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Buttons from './Components/Buttons';
import CardsData from './Components/CardsData';
import Colors from './Utilities/Colors';
import Borders from './Utilities/Borders';
import Animations from './Utilities/Animations';
import Other from './Utilities/Other';
import BlankPage from './Pages/BlankPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Page404 from './Pages/Page404';
import ChartsData from './ChartsData';
import Tables from './Tables';




function App() {
  return(
    <BrowserRouter>
      <div id='wrapper'>
        <Sidebar/>

        <div id="content-wrapper" className="d-flex flex-column">
         <div id='content'>
            <Topbar/>

            <div className='container-fluid'>
              <Routes>

                <Route path="/" element={<Dashboard/>}/>

                <Route path='/Components/Buttons' element={<Buttons/>}/>
                <Route path='/Components/Cards' element={<CardsData/>}/>

                <Route path='/Utilities/Colors' element={<Colors/>} />
                <Route path='/Utilities/Borders' element={<Borders/>} />
                <Route path='/Utilities/Animations' element={<Animations/>} />
                <Route path='/Utilities/Other' element={<Other/>} />

                <Route path='/Pages/BlankPaage' element={<BlankPage/>}/>
                <Route path='/Pages/Register' element={<Register/>}/>
                <Route path='/Pages/Login' element={<Login/>}/>
                <Route path='/Pages/ForgotPassword' element={<ForgotPassword/>}/>
                <Route path='/Pages/Page404' element={<Page404/>}/>
              
                <Route path="/ChartsData" element={<ChartsData/>}/>
                <Route path="/Tables" element={<Tables/>}/>
              </Routes>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2022</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;     