import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Connex logo.jpg';
import meeting from '../images/meeting.png';
import session from '../images/session.png';
import service from '../images/services.png';
import interview from '../images/interview.png';
import './optionpage.css';

export default function OptionPage() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <img src={logo} alt="Connex Logo" className="img-fluid" />
      </div>
      <div>
        <h3 className="text-center">Please select the reason for your visit</h3>
      </div>
      <div className="row">
        <div className="col mb-4">
          <div className="container optionpagecard">
            <img src={meeting} alt="meetings" className="img-fluid" />
            <h4 className="text-center">Meetings</h4>
          </div>
        </div>
        <div className="col mb-4">
          <div className="container optionpagecard">
            <img src={interview} alt="interviews" className="img-fluid" />
            <h4 className="text-center">Interviews</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col mb-4">
          <div className="container optionpagecard">
            <img src={session} alt="sessions" className="img-fluid" />
            <h4 className="text-center">Sessions</h4>
          </div>
        </div>
        <div className="col mb-4">
          <div className="container optionpagecard">
            <img src={service} alt="services" className="img-fluid" />
            <h4 className="text-center">Services</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
