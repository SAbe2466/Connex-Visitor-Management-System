import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Connex logo.jpg';
import './rejectpage.css';
import rejectlogo from '../images/rejectlogo.png';

export default function RejectPage() {
  return (
    <div>
      <div className=" row ">
        <div className="text-center mb-2">
          <img src={logo} alt="Connex Logo" className="img-fluid " />
        </div>
      </div>
      <div className="rejectalign">
        <h1>
          Your request is <span className="rejectpage">Rejected</span>
        </h1>
      </div>
      <div className="text-center mb-4">
        <img src={rejectlogo} alt="Reject Logo" className="img-fluid rejectlogo" />
      </div>
    </div>
  );
}
