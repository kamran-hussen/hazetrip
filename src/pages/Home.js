import { useState } from 'react';


import { Link } from "react-router-dom";
import Nav from "../components/sidebar/Nav";
import Cta from "../components/cta/Cta";
import Stats from "../components/stats/Stats";
import Notification from "../components/icons/Notification";
import logo from '../images/logo.svg';
import avatar from '../images/avatar.png';
import banner from '../images/banner.jpg';
import Departure from "../components/icons/Departure";
import Hotel from "../components/icons/Hotel";
import Visa from "../components/icons/Visa";
import Traveler from "../components/icons/Traveler";
import More from "../components/icons/More";

const Home = () => {
    const [activeTab, setActiveTab] = useState('Flights');

    const tabs = [
        { name: 'Flights', icon: <Departure /> },
        { name: 'Hotel', icon: <Hotel /> },
        { name: 'Tour', icon: <Traveler /> },
        { name: 'Visa', icon: <Visa /> }
    ];

    return (
        <div className="hazetrip-home">
            <div className="hazetrip-sidebar">
                <div className="hazetrip-sidebar-header">
                    <Link to="/">
                        <img src={logo} alt="HazeTrip Logo"/>
                    </Link>
                </div>
                <div className="hazetrip-sidebar-menu">
                    <Nav/>
                </div>
            </div>
            <div className="hazetrip-main">
                <div className="hazetrip-main-header">
                    <div className="hazetrip-main-inner">
                        <div className="hazetrip-cta">
                            <Cta title="Reservation Support" number="+088 01723894386" text="demo@example.com"/>
                            <Cta title="Sales Support" number="+088 01723894386" text="demo@example.com"/>
                        </div>

                        <div className="hazetrip-main-header-right">
                            <div className="hazetrip-stats-cards">
                                <Stats/>
                            </div>
                            <div className="hazetrip-notifications-dropwon-wrap">
                                <button className="notification-actions">
                                    <Notification/>
                                    <span>3</span>
                                </button>
                            </div>
                            <div className="hazetrip-profile-dropdown-wrap">
                                <div className="profile-actions">
                                    <img src={avatar} alt=""/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="hazetrip-main-body">
                    <div className="hazetrip-main-body-inner">
                        <div className="hazetrip-main-body-banner">
                            <img src={banner} alt=""/>
                        </div>
                        <div className="hazetrip-main-body-content">
                            <div className="hazetrip-search-tab">
                                <div className="tab-nav">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.name}
                                            className={`tab-nav-item ${activeTab === tab.name ? 'active' : ''}`}
                                            onClick={() => setActiveTab(tab.name)}
                                        >
                                            <span className="tab-icon">{tab.icon}</span>
                                            <span className="tab-label">{tab.name}</span>
                                        </div>
                                    ))}
                                    <div className="tab-nav-item">
                                        <More/>
                                        More
                                    </div>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'Flights' && (
                                        <div className="tab-content-item">
                                            <h2>Flight</h2>
                                            {/* Add flight-related content here */}
                                        </div>
                                    )}
                                    {activeTab === 'Hotel' && (
                                        <div className="tab-content-item">
                                            <h2>Hotel</h2>
                                            {/* Add hotel-related content here */}
                                        </div>
                                    )}
                                    {activeTab === 'Tour' && (
                                        <div className="tab-content-item">
                                            <h2>Tour</h2>
                                            {/* Add tour-related content here */}
                                        </div>
                                    )}
                                    {activeTab === 'Visa' && (
                                        <div className="tab-content-item">
                                            <h2>Visa</h2>
                                            {/* Add visa-related content here */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
