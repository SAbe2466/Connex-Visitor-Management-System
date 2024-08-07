import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Connex logo.jpg';
import './accepted.css';

export default function AcceptedPage() {
  return (
    <div>
      <div className=" row ">
        <div className="text-center mb-4">
          <img src={logo} alt="Connex Logo" className="img-fluid" />
        </div>
      </div>
      <div className="acceptalign">
        <h1>
          Your request is <span className="acceptedpage">Accepted</span>
        </h1>
      </div>
      <div className="passno">
        <h3>Pass No:</h3>
        <h3>WIFI Username:</h3>
        <h3>WIFI Password:</h3>
        
      </div>
    </div>
  );
}
