import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Sidebar() {

    const[style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");


    const changeStyle = () => {
        if(style==="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
            setStyle ("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }else{
            setStyle ("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };

    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link to="/" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item active">

                <a className="nav-link collapsed dropdown-toggle" href="/" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">

                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link to="/Components/Buttons" className="collapse-item">Buttons</Link>
                        <Link to="/Components/Cards" className="collapse-item">Cards</Link>
                    </div> 
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link to="/Utilities/Colors" className="collapse-item">Colors</Link>
                        <Link to="/Utilities/Borders" className="collapse-item">Borders</Link>
                        <Link to="/Utilities/Animations" className="collapse-item">Animations</Link>
                        <Link to="/Utilities/Other" className="collapse-item">Other</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>
            
            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        
                        <h6 className="collapse-header">Login Screens:</h6>

                        <Link to="/Pages/Login" className="collapse-item">Login</Link>
                        <Link to="/Pages/Register" className="collapse-item">Register</Link>
                        <Link to="/Pages/ForgotPassword" className="collapse-item">Forgot Password</Link>
                        <div className="collapse-divider"></div>

                        <h6 className="collapse-header">Other Pages:</h6>

                        <Link to="/Pages/Page404" className="collapse-item">404 Page</Link>
                        <Link to="/Pages/BlankPage" className="collapse-item"><span>Blank Page</span></Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link to="/ChartsData" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/Tables" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    );
};

export default Sidebar;