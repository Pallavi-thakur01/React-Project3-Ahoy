import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {
  return (
    <div className='row'>
      <div className='col-1'>
    <CDBSidebar className='bg-white'  >
    <CDBSidebarHeader  prefix={<i className="fa fa-bars text-secondary " />}> <img src={require("../images/img1.png")} alt="hello:" /></CDBSidebarHeader>
    <CDBSidebarContent>
      <CDBSidebarMenu>
        <CDBSidebarMenuItem  className="  text-dark " icon="th-large">Dashboard</ CDBSidebarMenuItem>
        <CDBSidebarMenuItem   className=" text-dark" icon="sticky-note">Components</CDBSidebarMenuItem>
        <CDBSidebarMenuItem   className=" text-dark" icon="credit-card" iconType="solid">
          Metrics
        </CDBSidebarMenuItem>
      </CDBSidebarMenu>
    </CDBSidebarContent>

    <CDBSidebarFooter>
      <div
        className="sidebar-btn-wrapper" 
        style={{padding: '20px 5px'}}
      >
        Sidebar Footer
      </div>
    </CDBSidebarFooter>
  </CDBSidebar>
 </div>
 <div className='col-11'>
  <div className=' p-4 shadow'>

  </div>

 </div>
 {/* <div className='col-3'>
  <div className='border p-4 shadow'>

  </div>

 </div> */}

  </div>
);
};
export default SideBar;










