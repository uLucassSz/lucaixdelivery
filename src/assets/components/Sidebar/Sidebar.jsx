import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarContainer">
            <div className="sidebarLink">
                <i className="bx bx-grid-alt active"></i>
            </div>
            <div className="sidebarLink">
                <i className="bx bxs-truck"></i>
            </div>
            <div className="sidebarLink">
                <i className="bx bx-credit-card"></i>
            </div>
            <div className="sidebarLink">
                <i className="bx bx-group"></i>
            </div>
            <div className="sidebarLink">
                <i className="bx bx-time"></i>
            </div>
        </div>
        <div className="sidebarLink">
            <i className="bx bx-cog"></i>
        </div>
    </div>
  );
}

export default Sidebar;