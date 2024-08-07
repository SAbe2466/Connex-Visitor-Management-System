import 'bootstrap/dist/css/bootstrap.min.css';
import './whompage.css';
import logo from '../images/Connex logo.jpg';

export default function WhomPage() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <img src={logo} alt="Connex Logo" className="mb-2" />
      </div>
      <div>
        <h3>Whom do you want to meet ? </h3>
      </div>
      <div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="row d-flex  justify-content-end p-4">
        <div className="col-2">
          <button type="button" className="btn btn-primary">
            Back
          </button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
