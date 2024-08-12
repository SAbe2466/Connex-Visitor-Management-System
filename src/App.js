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
import PersonalInfo from './components/PersonalInfo/personalinfo';
import EventOverview from './components/EventOverview/event';
import Sidebar from './components/Sidebar/sidebar';
import Interview from './components/Interviews/interview';
import Meetings from './components/Meetings/meeting';
import Sessions from './components/Sessions/session';
import Overview from'./components/OverviewPageAdmin/overview'

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
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/event-overview" element={<EventOverview />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/meeting" element={<Meetings />} />
        <Route path="/session" element={<Sessions />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
