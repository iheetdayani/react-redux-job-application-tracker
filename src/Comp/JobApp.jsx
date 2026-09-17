import { useState } from "react";
import { Addjob, deletejob } from "../Comp/JobSlice";
import { useDispatch, useSelector } from "react-redux";
const JobApp = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const cart = useSelector((state) => state.jobs.job);
  const [search, setsearch] = useState("");
  const [status, setStatus] = useState("");
  const Filteredjobs = jobs.filter((job) => {
    return job.company.toLowerCase().includes(search.toLowerCase())
      && (status === "" || job.status.toLowerCase().includes(status.toLowerCase()));
  });


  const dispatch = useDispatch();
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Job Application Tracker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jobs</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Applied Jobs

                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <a className="nav-link" href="#">
                Applied Jobs ({cart.length})
              </a>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
              <button class="btn btn-outline-success" type="submit">Search</button>
              <select
                className="form-select me-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Selected">Selected</option>
                <option value="Rejected">Rejected</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
      <div className="row">
        {Filteredjobs.map((job) => (
          <div className="col-md-3 mt-3" key={job.id}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{job.company}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {job.role}
                </h6>
                <p className="card-text">{job.location}</p>

                <button
                  className="btn btn-success"
                  onClick={() => {
                    const alreadyApplied = cart.find((item) => {
                      return item.id === job.id;
                    });

                    if (alreadyApplied) {
                      alert("You have already applied for this job!");
                    } else {
                      dispatch(Addjob(job));
                    }
                  }}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div >
      <div className="container text-center mt-5">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Applied Jobs</h4>
        </div>
        <div className="row">
          {cart.map((item) => (
            <div className="col-md-3 mt-3" key={item.id}>
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">{item.company}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {item.role}
                  </h6>
                  <p className="card-text">{item.location}</p>

                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deletejob(item))}
                  >
                    Cancel Application
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default JobApp;