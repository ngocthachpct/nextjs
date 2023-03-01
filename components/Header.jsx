import React from "react";

function Header(){
    return (
  
      <div className="header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src="assets/logo.png" alt="Logo" />
        </a>
        <a href="/" className="logo logo-small">
          <img src="assets/logo-small.png" alt="Logo" width={30} height={30} />
        </a>
        <a href="javascript:void(0);" id="toggle_btn">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
      </div>
      
      <a className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars" />
      </a>
      <ul className="nav user-menu">
        
        <li className="nav-item dropdown has-arrow main-drop">
          <a href="ProfileDetail" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img src="assets/profile.jpg" alt="" />
              <span className="status online" />
            </span>
            <span>Kavin Hansen</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="profile.html">
              <i data-feather="user" className="mr-1" />
              Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              <i data-feather="settings" className="mr-1" />
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              <i data-feather="log-out" className="mr-1" />
              Logout
            </a>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu show">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right ">
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a>
          <a className="dropdown-item" href="login.html">
            Logout
          </a>
        </div>
      </div>
    </div>
    
      );
}

export default Header;