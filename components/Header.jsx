import React from "react";
import { Bell } from 'react-feather';
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
function Header() {
  return (

    <div className="header">
      <div className="header-left">
        <a href="#" className="logo">
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
      <a className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars" />
      </a>
      <ul className="nav user-menu">
        
        <li className="nav-item dropdown has-arrow main-drop">
          <Grid.Container justify="flex-start" gap={2}>
            <Grid>
              <Dropdown placement="bottom-left">
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    size="lg"
                    as="button"
                    color="secondary"
                    src="/avatar-02.jpg"
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      zoey@example.com
                    </Text>
                  </Dropdown.Item>
                  {/* <Dropdown.Item key="settings" withDivider>
                    My Settings
                  </Dropdown.Item>
                  <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item> */}
                  {/* <Dropdown.Item key="analytics" withDivider>
                    Check Attendance
                  </Dropdown.Item>
                  <Dropdown.Item key="system">Settings</Dropdown.Item> */}
                  <Dropdown.Item href="/profile" key="configurations">Profile</Dropdown.Item>
                  {/* <Dropdown.Item key="help_and_feedback" withDivider>
                    Help & Feedback
                  </Dropdown.Item> */}
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

export default Header;