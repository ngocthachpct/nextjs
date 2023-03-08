import React from "react";
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Sidebar/>
    </div>
  )
}
