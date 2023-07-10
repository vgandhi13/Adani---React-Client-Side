import {useEffect,useState} from 'react';
import PieChart from './PieChart';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import './Dashboard.css';
 
 
const Dashboard = ({service, buName, userObj}) => {
    const [record, setRecord] = useState([]);
    const navigator = useNavigate();
    
    const handleBackClick = (endpoint) => {
      navigator(endpoint);
    };
  
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res => setRecord(res));
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <div className="col main pt-5 mt-3">
      <Logout />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item">
          <button className="hyperlink-button" onClick={() => handleBackClick('/LandingPage')}>Home</button>
          </li>
          <li className="breadcrumb-item">
            <button className="hyperlink-button" onClick={() => handleBackClick('/IdleResourcesCloudSelection')}>Back to Selection</button>
          </li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        <p className="lead d-none d-sm-block">{service} - {buName}</p>
  
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
              <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                <div className="rotate">
                  <i className="fas fa-compact-disc fa-4x"></i>
                </div>
                <h6 className="text-uppercase">Idle Persistent Disks</h6>
                <h1 className="display-4">134</h1>
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
                  <th>Project</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Last Use Time</th>
                </tr>
              </thead>
              <tbody>
                {record.slice(0, 5).map(output => (
                  <tr key={output.id}>
                    <td>xyz</td>
                    <td>xyz</td>
                    <td>xyz</td>
                    <td>xyz</td>
                    <td>xyz</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h4 className="title mt-3 mb-3 text-center text-secondary">Data in Chart</h4>
            <div className="mb-5" style={{ height: '300px', width: '400px', marginLeft: '65px' }}>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;