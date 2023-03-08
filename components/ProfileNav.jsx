import * as Icon from 'react-feather';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export default function ProfileNav() {
  const router = useRouter();
  return (
    <div>
      <div className="col-xl-12 col-sm-12 col-12 ">
          <div className="breadcrumb-path mb-4">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <img
                    src="/dash.png"
                    className="mr-2"
                    alt="breadcrumb"
                  />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active"> Profile</li>
            </ul>
            <h3>Profile </h3>
          </div>
        </div>
    <div className="col-xl-12 col-sm-12 col-12 mb-4">
          <div className="head-link-set">
            <ul>
              <li>
              <a className={router.pathname.split("?")[0].toLowerCase() == "/profile" ? "active" : "" } 
                href={router.pathname.split("?")[0].toLowerCase() == "/profile" ? "#" : "/profile" }>
                  General
                </a>
              </li>
              {/* <li>
                <a className={router.pathname.split("?")[0].toLowerCase().includes( "/profiledetail") ? "active" : "" } 
                href={router.pathname.split("?")[0].toLowerCase().includes( "/profiledetail") ? "#" : "/profileDetail/100" }>
                  Detail
                </a>
              </li> */}
              
              <li>
              <a className={router.pathname.split("?")[0].toLowerCase() == "/profilesetting" ? "active" : "" } 
                href={router.pathname.split("?")[0].toLowerCase() == "/profilesetting" ? "#" : "/profileSetting" }>
                  Settings
                </a>
              </li>
              <li>
              <a className={router.pathname.split("?")[0].toLowerCase() == "/profilereport" ? "active" : "" } 
                href={router.pathname.split("?")[0].toLowerCase() == "/profilereport" ? "#" : "/profileReport" }>
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        </div>
  );
}
