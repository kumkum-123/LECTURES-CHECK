import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignInForm from './Components/SignInForm';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import UploadVideo from './Components/UploadVideo';
import UploadPdf from './Components/UploadPdf';
import Help from './Components/Help';
import FileUpload from './Components/FileUpload';

const AppContent = ({ isSignedIn, setIsSignedIn, handleSidebarToggle, isSidebarVisible }) => {
  const location = useLocation();

  // Determine whether to show the Navbar based on the current path
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app-container">
      {isSignedIn && showNavbar && <Navbar />}
      <div className="content-container">
        {isSignedIn && isSidebarVisible && <Sidebar />}
        <Routes>
          <Route path="/" element={<SignInForm onSignIn={() => setIsSignedIn(true)} />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/uploadvideo" element={<UploadVideo onSidebarToggle={handleSidebarToggle} />} />
          <Route path="/fileupload" element={<FileUpload onSidebarToggle={handleSidebarToggle} />} />
          <Route path="/uploadpdf" element={<UploadPdf onSidebarToggle={handleSidebarToggle} />} />
          <Route path="/help" element={<Help onSidebarToggle={handleSidebarToggle} />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility

  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <AppContent
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        handleSidebarToggle={handleSidebarToggle}
        isSidebarVisible={isSidebarVisible}
      />
    </Router>
  );
};

export default App;






