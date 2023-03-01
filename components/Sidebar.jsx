import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


function Sidebar (){
  const router = useRouter();

    return (
  
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div className="sidebar-contents">
              <div id="sidebar-menu" className="sidebar-menu">
                <div className="mobile-show">
                  <div className="offcanvas-menu">
                    <div className="user-info align-center bg-theme text-center">
                      <span className="lnr lnr-cross  text-white" id="mobile_btn_close">X</span>
                      <a href="javascript:void(0)" className="d-block menu-style text-white">
                        <div className="user-avatar d-inline-block mr-3">
                          <img src="assets/avatar-18.jpg" alt="user avatar" className="rounded-circle" width={50} />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="sidebar-input">
                    <div className="top-nav-search">
                      <form>
                        <input type="text" className="form-control" placeholder="Search here" />
                        <button className="btn" type="submit"><i className="fas fa-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="active">
                    <a href="Dashboard"><img src="assets/home.svg" alt="sidebar_img" />
                      <span>Dashboard</span></a>
                  </li>
                  <li>
                    <a href="Employee"><img src="assets/employee.svg" alt="sidebar_img" /><span>
                        Employees</span></a>
                  </li>
                  <li>
                    <a href="Company"><img src="assets/leave.svg" alt="sidebar_img" /> <span>
                        Companies</span></a>
                  </li>
                  <li>
                    <a href="Department"><img src="assets/company.svg" alt="sidebar_img" /> <span>
                        Departments</span></a>
                  </li>
                  
                  
                  
                  
                  
                  
                  <li>
                    <a href="Profile"><img src="assets/profile.svg" alt="sidebar_img" />
                      <span>Profile</span></a>
                  </li>
                </ul>
                <ul className="logout">
                  <li>
                    <a href="/"><img src="assets/logout.svg" alt="sidebar_img" /><span>Log
                        out</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Sidebar;