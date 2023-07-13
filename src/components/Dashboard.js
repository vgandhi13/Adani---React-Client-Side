import { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import './Dashboard.css';
import { getUnusedDisks } from '../Services/Requests';

const Dashboard = ({ services, buNames }) => {
  const [record, setRecord] = useState([]);
  const [disks, setDisks] = useState([]);
  const [allResources, setAllResources] = useState([]);
  const navigator = useNavigate();
  const handleBackClick = (endpoint) => {
    navigator(endpoint);
  };

  // const getData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((res) => setRecord(res));
  // };

  useEffect(() => {
   // getData();
   setRecord([1,2,3,4,5, 6, 7]) // set this to size of the one being displayed -- disks, images, or all
   const makeAPICalls = async () => {
    let resp = await getUnusedDisks(services, buNames)
    setDisks(resp.data);
    
    console.log(resp.data)
   }
   
   makeAPICalls()
  }, []);

  useEffect(() => {
    /*By separating the setAllResources statement into its own useEffect hook, you ensure
     that it is executed after the disks state has been updated. This should resolve the issue
      you were facing with the table not showing the data correctly. */
    setAllResources([...disks])
  }, [disks])

  return (
    <div className="col main pt-5 mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <button
              className="hyperlink-button"
              onClick={() => handleBackClick('/LandingPage')}
            >
              Home
            </button>
          </li>
          <li className="breadcrumb-item">
            <button
              className="hyperlink-button"
              onClick={() => handleBackClick('/IdleResourcesCloudSelection')}
            >
              Back to Selection
            </button>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <p className="lead d-none d-sm-block">
        {services.join(', ')} - {buNames.join(', ')}
      </p>

      <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div
              className="card-body bg-success"
              style={{ backgroundColor: '#57b960' }}
            >
              <div className="rotate">
                <i className="fas fa-compact-disc fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle Persistent Disks</h6>
              <h1 className="display-4">{disks.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle IP addresses</h6>
              <h1 className="display-4">87</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fa fa-save fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle Images</h6>
              <h1 className="display-4">125</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <i class="fas fa-plus fa-4x "></i>
                <i class="fas fa-4x fa-equals"></i>
              </div>
              <h6 className="text-uppercase">Total Idle Resources</h6>
              <h1 className="display-4">300</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="row ">
        <div className="col-lg-8 col-md-12">
          <h3 className="title mb-3">All Unused Resources</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr className="bg-primary text-white">
                <th>Project Name</th>
                <th>Resource Name</th>
                <th>Description</th>
                <th>Last Use Time</th>
                <th>Cost Saved</th>
              </tr>
            </thead>
            <tbody>
            {allResources.map((resource) => (
              <tr key={resource.bu}>
                <td>{resource.project_name}</td>
                <td>{resource.disk_name}</td>
                <td>{resource.description}</td>
                <td>{resource.last_use_time}</td>
                <td>{resource.cost_saved}</td>
              </tr>
            ))}
          </tbody>


          </table>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <h4 className="title mt-3 mb-3 text-center text-secondary">Data in Chart</h4>
          <div
            className="mb-5"
            style={{ height: '300px', width: '400px', marginLeft: '65px' }}
          >
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
