import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaFilePdf, FaChartLine } from 'react-icons/fa'; // Import necessary icons
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/uploadvideo" className="sidebar-link">
        <FaVideo className="sidebar-icon" />
        Upload Video
      </Link>
      <Link to="/uploadpdf" className="sidebar-link">
        <FaFilePdf className="sidebar-icon" />
        Upload PDF
      </Link>
      <Link to="/analysis" className="sidebar-link">
        <FaChartLine className="sidebar-icon" />
        Analysis
      </Link>
    </div>
  );
};

export default Sidebar;



