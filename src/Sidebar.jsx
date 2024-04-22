import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import Header from './Header'
import Home from './Home'
import Events from './Events'
import Categories from './Categories'
import Campaigns from './Campaigns'
import Help from './Help'
import Reports from './Reports'
import { Link } from 'react-router-dom';


function Sidebar({openSidebarToggle, OpenSidebar}) {

    return (
     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className="sidebar-brand">
                {/* <BsCart3 className="icon_header"></BsCart3> SHOP */}
                ANALYTICS DASHBOARD
                
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                {/* <a href=''> */}
                    <BsGrid1X2Fill className='icon'></BsGrid1X2Fill>Dashboard
                    {/* </a> */}
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/events">
                {/* <a href='/'> */}
                    <BsFillArchiveFill className='icon'></BsFillArchiveFill>Events
                    {/* </a>  */}
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/categories">
                    <BsFillGrid3X3GapFill className='icon'></BsFillGrid3X3GapFill>Categories
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/campaigns">
                    <BsPeopleFill className='icon'></BsPeopleFill>Campaigns
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/help">
                    <BsListCheck className='icon'></BsListCheck>Help
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/reports">
                    <BsMenuButtonWideFill className='icon'></BsMenuButtonWideFill>Reports
                    </Link>
            </li>
        </ul>

     </aside>
    )
  }
  
  export default Sidebar