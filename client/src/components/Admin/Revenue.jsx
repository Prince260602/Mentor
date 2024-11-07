import React from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import './Revenue.css';

function Revenue() {
  return (
    <>
      <AdminHeader />
      <div className="revenue-container">
        <Sidebar />
        <div className="revenue-content">
          Revenue
        </div>
      </div>
    </>
  );
}

export default Revenue;
