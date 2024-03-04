import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ handleMenuClick }) {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 ZTechnology
            </div>
            <span className='icon close_icon'>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/" onClick={() => handleMenuClick('Dashboard')}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/productos" onClick={() => handleMenuClick('Productos')}>
                    <BsFillArchiveFill className='icon'/> Productos
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#" onClick={() => handleMenuClick('Categorias')}>
                <i className="fa-solid fa-users"></i> Usuarios
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#" onClick={() => handleMenuClick('Clientes')}>
                    <BsPeopleFill className='icon'/> Clientes
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#" onClick={() => handleMenuClick('Inventarios')}>
                <i className="fa-solid fa-receipt"></i> Cotizacion
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#" onClick={() => handleMenuClick('Cotizacion')}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#" onClick={() => handleMenuClick('Setting')}>
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;





/*import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar*/
