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
                      <a href="#" className="d-block menu-style text-white">
                        <div className="user-avatar d-inline-block mr-3">
                          <img src="/avatar-18.jpg" alt="user avatar" className="rounded-circle" width={50} />
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
                  <li className={router.pathname.split("?")[0].toLowerCase() == "/dashboard" ? "active" : "" }>
                    <a href="/dashboard"><img src="/home.svg" alt="sidebar_img" />
                      <span>Dashboard</span></a>
                  </li>
                  <li className={router.pathname.split("?")[0].toLowerCase() == "/employee" ? "active" : "" }>
                    <a href="/employee"><img src="/employee.svg" alt="sidebar_img" /><span>
                        Employees</span></a>
                  </li>
                  <li className={router.pathname.split("?")[0].toLowerCase() == "/branch" ? "active" : "" }>
                    <a href="branch"><img src="/leave.svg" alt="sidebar_img" /> <span>
                        Branches</span></a>
                  </li>
                  <li className={router.pathname.split("?")[0].toLowerCase() == "/department" ? "active" : "" }>
                    <a href="/department"><img src="/company.svg" alt="sidebar_img" /> <span>
                        Departments</span></a>
                  </li>
                  
                  <li className={router.pathname.split("?")[0].toLowerCase().includes("profile") ? "active" : "" }>
                    <a href="/profile"><img src="/profile.svg" alt="sidebar_img" />
                      <span>Profile</span></a>
                  </li>
                </ul>
                <ul className="logout">
                  <li>
                    <a href="/"><img src="/logout.svg" alt="sidebar_img" /><span>Log
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