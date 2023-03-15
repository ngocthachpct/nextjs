import React from "react";
import { useRouter } from "next/router";
import { setCookie } from 'cookies-next';
import { DataContext } from './../store/GlobalState';
import { useContext } from "react"
import * as Icon from 'react-feather';

function Sidebar() {
  const userInfor = getLocalInfo()
  const employee_id = userInfor.id
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state


  const logout = async e => {
    e.preventDefault()

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    (async () => {
      dispatch({ type: 'NOTIFY', payload: { loading: true } })
      await sleep(3000)
      try {
        const response = await fetch('http://localhost:3001/auth/logout', {
          method: 'GET',
        });

        if (response.ok) {
          setCookie('token', '', { expires: new Date(0) });
          setCookie('id', '', { expires: new Date(0) });
          localStorage.removeItem('userInfo')
          dispatch({ type: 'NOTIFY', payload: { isHidden: 'hidden' } })
          router.push('/')
        } else {
          router.push('/!#')
        }
      } catch (error) {
        console.error(error);
      }
    })()

  }

  const forward = async ({e, page}) =>{
    e.preventDefault()

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    (async () => {
      dispatch({ type: 'NOTIFY', payload: { loading: true } })
      await sleep(1000)
      dispatch({ type: 'NOTIFY', payload: { isHidden: 'hidden' } })
      router.push(`/${page}`)
  })()
  }
  
  return (

    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div className="sidebar-contents">
          <div id="sidebar-menu" className="sidebar-menu">
            <div className="mobile-show">
              
              
              <div className="sidebar-input">
              <a onClick = {handleCloseMobile} style={{ ["float"]: "right" }}><Icon.XCircle /></a>
              </div>
            </div>
            <ul>
              <li className={router.pathname.split("?")[0].toLowerCase() == "/dashboard" ? "active" : ""}>
              <a onClick={(e) => forward({e, page: 'dashboard'})}><img src="/home.svg" alt="sidebar_img" />
                  <span>Dashboard</span></a>
              </li>
              <li className={router.pathname.split("?")[0].toLowerCase() == "/employee" ? "active" : ""}>
              <a onClick={(e) => forward({e, page: 'employee'})}><img src="/employee.svg" alt="sidebar_img" /><span>
                  Employees</span></a>
              </li>
              <li className={router.pathname.split("?")[0].toLowerCase() == "/department" ? "active" : ""}>
              <a onClick={(e) => forward({e, page: 'department'})}><img src="/company.svg" alt="sidebar_img" /> <span>
                  Departments</span></a>
              </li>
              <li className={router.pathname.split("?")[0].toLowerCase() == "/branch" ? "active" : ""}>
              <a onClick={(e) => forward({e, page: 'branch'})}><img src="/leave.svg" alt="sidebar_img" /> <span>
                  Branches</span></a>
              </li>
              

              <li className={router.pathname.split("?")[0].toLowerCase().includes("profile") && router.pathname.split("?")[0].toLowerCase().length < 8 ? "active" : ""}>
              <a href= '/profile' onClick={(e) => forward({e, page: 'profile'}) }><img src="/profile.svg" alt="sidebar_img" />
                  <span>Profile</span></a>
              </li>
            </ul>
            <ul className="logout">
              <li>
                <a onClick={logout}><img src="/logout.svg" alt="sidebar_img" /><span>Log
                  out</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleCloseMobile(){
  $("html").removeClass("menu-opened");
  $(".main-wrapper").removeClass("slide-nav");
  $(".sidebar-overlay").removeClass("opened");
  return false;
}

export default Sidebar;
function getLocalInfo() {
  if(typeof window !== "undefined") {
  if(localStorage.getItem("userInfo")) {
    return JSON.parse(localStorage.getItem('userInfo'))
  } else{
  return 'none'
  }
}
return 'none'
}