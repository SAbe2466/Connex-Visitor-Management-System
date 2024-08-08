import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Connex logo.jpg';
import './thankyoupage.css';
import thankyoulogo from '../images/thankyou.png';

export default function ThankyouPage() {
  return (
    <div>
      <div className=" row ">
        <div className="text-center mb-2">
          <img src={logo} alt="Connex Logo" className="img-fluid " />
        </div>
      </div>
      <div className="thankyoualign">
        <h1>Thank You</h1>
      </div>
      <div className="text-center mb-4">
        <img
          src={thankyoulogo}
          alt="Thankyou Logo"
          className="img-fluid thankyoulogo"
        />
      </div>
    </div>
  );
}
