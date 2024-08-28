import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import UploadVideo from './UploadVideo';
import UploadPdf from './UploadPdf';
import Analysis from './Analysis';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="upload-video" element={<UploadVideo />} />
          <Route path="upload-pdf" element={<UploadPdf />} />
          <Route path="analysis" element={<Analysis />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;





