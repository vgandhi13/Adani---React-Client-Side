import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { getUnusedDisks, getUnusedImages, getUnusedIp } from '../Services/Requests';

const Dashboard = ({ services, buNames }) => {
  const [disks, setDisks] = useState([]);
  const [tableHeading, setTableHeading] = useState("All Unused Resources")
  const [ip, setIp] = useState([]);
  const [images, setImages] = useState([]);
  const [allResources, setAllResources] = useState([]);
  const [selectedCard, setSelectedCard] = useState('total'); // 'disks', 'images', 'ip', 'total'
  const navigator = useNavigate();
  const handleBackClick = (endpoint) => {
    navigator(endpoint);
  };

  useEffect(() => {
    const fetchAllResources = async () => {
      const responseDisks = await getUnusedDisks(services, buNames);
      const responseImages = await getUnusedImages(services, buNames);
      const responseIp = await getUnusedIp(services, buNames);

      setDisks(responseDisks.data);
      setImages(responseImages.data);
      setIp(responseIp.data);

      // Set all resources initially as the total of disks, images, and IP
      setAllResources([...responseDisks.data, ...responseImages.data, ...responseIp.data]);
    };

    fetchAllResources();
  }, []);

  useEffect(() => {
    // Update all resources when disks, images, or IP change
    if (selectedCard === 'disks') {
      setAllResources(disks);
    } else if (selectedCard === 'images') {
      setAllResources(images);
    } else if (selectedCard === 'ip') {
      setAllResources(ip);
    } else if (selectedCard === 'total') {
      setAllResources([...disks, ...images, ...ip]);
    }
  }, [selectedCard, disks, images, ip]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTableHeading(card === "disks" ? "Unused Disks" : card === "total" ? "All Unused Resources" : card === "images" ? "Unused Images" : "Unused Ip Addresses");
  };

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
          <div
            className={`card bg-success text-white h-100 ${
              selectedCard === 'disks' ? 'selected' : ''
            }`}
            onClick={() => handleCardClick('disks')}
          >
            <div className="card-body bg-success" style={{ backgroundColor: '#57b960' }}>
              <div className="rotate">
                <i className="fas fa-compact-disc fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle Persistent Disks</h6>
              <h1 className="display-4">{disks.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className={`card text-white bg-danger h-100 ${
              selectedCard === 'ip' ? 'selected' : ''
            }`}
            onClick={() => handleCardClick('ip')}
          >
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle IP addresses</h6>
              <h1 className="display-4">{ip.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className={`card text-white bg-info h-100 ${
              selectedCard === 'images' ? 'selected' : ''
            }`}
            onClick={() => handleCardClick('images')}
          >
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fa fa-save fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Idle Images</h6>
              <h1 className="display-4">{images.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className={`card text-white bg-warning h-100 ${
              selectedCard === 'total' ? 'selected' : ''
            }`}
            onClick={() => handleCardClick('total')}
          >
            <div className="card-body">
              <div className="rotate">
                <i class="fas fa-plus fa-4x "></i>
                <i class="fas fa-4x fa-equals"></i>
              </div>
              <h6 className="text-uppercase">Total Idle Resources</h6>
              <h1 className="display-4">{images.length + ip.length + disks.length}</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="row ">
        <div className="col-lg-8 col-md-12">
          <h3 className="title mb-3">
            {tableHeading}
            <FontAwesomeIcon icon={faDownload} size="1x" style={{ marginLeft: "2rem" }} />
          </h3>
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
                  <td>{resource.name}</td>
                  <td>{resource.description}</td>
                  <td>{resource.last_use_time}</td>
                  <td>{resource.cost_saved}</td>
                </tr>
              ))}
            </tbody>


          </table>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <h4 className="title mt-3 mb-3 text-center text-secondary">Resource Last Used by Time Range</h4>
          <div
            className="mb-5"
            style={{ height: '300px', width: '400px', marginLeft: '9rem' }}
          >
            <PieChart allResources={allResources} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
