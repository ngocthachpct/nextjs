import React from "react";
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({children}) {
  return (
    <div className="main-wrapper">
      <Header/>
      {children}
      <Sidebar/>
    </div>
  )
}
