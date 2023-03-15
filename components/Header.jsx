import React from "react";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
function Header() {
  const userInfor = getLocalInfo()
  return (

    <div className="header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>
        <a href="#" className="logo logo-small">
          <img src="/logo-small.png" alt="Logo" width={30} height={30} />
        </a>
        <a href="#" id="toggle_btn">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
      </div>
      {/* <div className="top-nav-search">
        <form>
          <input type="text" className="form-control" />
          <button className="btn" type="submit"><i className="fas fa-search" /></button>
        </form>
      </div> */}
      <a onClick = {handleMobile} className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars" />
      </a>
      <ul className="nav user-menu">
        
        <li className="nav-item dropdown has-arrow main-drop">
          <Grid.Container justify="flex-start" gap={2}>
            <Grid>
              <Dropdown placement="bottom-left">
                <Dropdown.Trigger>
                  <Avatar
                  id="avatar-header"
                    bordered
                    size="lg"
                    as="button"
                    color="secondary"
                    src="/avatar-02.jpg"
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item color="default" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      {userInfor.email}
                    </Text>
                  </Dropdown.Item>
                
                  <Dropdown.Item href="/profile" key="configurations">Profile</Dropdown.Item>
                  
                  <Dropdown.Item key="logout" color="error" withDivider>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid.Container>
        </li>
      </ul>
    </div>
  );
}
function handleMobile(){
  var $wrapper = $('.main-wrapper');
  $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        return false;
}
export default Header;
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