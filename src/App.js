import './App.css';
import RegistrationPage from './components/RegistrationPage/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhomPage from './components/WhomPage/whompage';
import OptionPage from './components/OptionPage/optionpage';
import Login from './components/Login/login';
import AcceptedPage from './components/AcceptedPage/accepted';
import RejectPage from './components/RejectPage/rejectpage';
import ThankyouPage from './components/ThankyouPage/thankyoupage';
import HomePage from './components/HomePage Admin/homepage';
import ProfileInfo from './components/ProfileInfo/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/whom-page" element={<WhomPage />} />
        <Route path="/option-page" element={<OptionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accepted-page" element={<AcceptedPage />} />
        <Route path="/reject-page" element={<RejectPage />} />
        <Route path="/thankyou-page" element={<ThankyouPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/profile-card" element={<ProfileInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
