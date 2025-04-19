import { useState } from 'react';


import { Link } from "react-router-dom";
import Nav from "../components/sidebar/Nav";
import logo from '../images/logo.svg';
import banner from '../images/banner.jpg';
import Departure from "../components/icons/Departure";
import Hotel from "../components/icons/Hotel";
import Visa from "../components/icons/Visa";
import Traveler from "../components/icons/Traveler";
import More from "../components/icons/More";
import Arrival from "../components/icons/Arrival";
import ArrowSwitch from "../components/icons/ArrowSwitch";
import Calendar from "../components/icons/Calendar";
import PlusCircle from "../components/icons/PlusCircle";
import PremiumEconomy from "../components/icons/PremiumEconomy";
import RunningFlight from "../components/icons/RunningFlight";
import Header from "../components/header/Header";

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
                <Header/>

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
                                            <div className="flight-search-main-container">
                                                <div className="flight-type">
                                                    <button className="flight-type-button selected">
                                                        <span className="radio-icon"></span>
                                                        One Way
                                                    </button>
                                                    <button className="flight-type-button">
                                                        <span className="radio-icon"></span>
                                                        Round Trip
                                                    </button>
                                                    <button className="flight-type-button">
                                                        <span className="radio-icon"></span>
                                                        Multi City
                                                    </button>
                                                </div>

                                                <div className="flight-search-container">
                                                    <div className="hazetrip-from-to-container">
                                                        <div className="journey-card">
                                                            <div className="journey-card-head">
                                                                <div className="journey-card-text">From</div>
                                                                <div className="journey-card-icon">
                                                                    <Departure/>
                                                                </div>
                                                            </div>

                                                            <div className="journey-card-input-wrap relative">
                                                                <div className="journey-card-input-hading">dac</div>
                                                                <div className="journey-card-input-content">
                                                                    <div className="journey-card-input-label">
                                                                        Dhaka
                                                                    </div>
                                                                    <div className="journey-card-input-text">
                                                                        Hazrat Shahjalal International Airport
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="journey-card-switch">
                                                            <button>
                                                                <ArrowSwitch/>
                                                            </button>
                                                        </div>

                                                        <div className="journey-card">
                                                            <div className="journey-card-head">
                                                                <div className="journey-card-text">To</div>
                                                                <div className="journey-card-icon">
                                                                    <Arrival/>
                                                                </div>
                                                            </div>

                                                            <div className="journey-card-input-wrap">
                                                                <div className="journey-card-input-hading">lcy</div>
                                                                <div className="journey-card-input-content">
                                                                    <div className="journey-card-input-label">
                                                                        London
                                                                    </div>
                                                                    <div className="journey-card-input-text">
                                                                        London City Airport
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hazetrip-journey-right">
                                                        <div className="departure-and-return-card">
                                                            <div className="departure-row">
                                                                <div className="departure-head">
                                                                    <div className="text">
                                                                        Departure Date
                                                                    </div>
                                                                    <div className="icon">
                                                                        <Calendar/>
                                                                    </div>
                                                                </div>
                                                                <div className="journey-card-input-wrap">
                                                                    <div className="journey-card-input-hading">12</div>
                                                                    <div className="journey-card-input-content">
                                                                        <div className="journey-card-input-label">
                                                                            March, 2025
                                                                        </div>
                                                                        <div className="journey-card-input-text">
                                                                            Thursday
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="departure-row">
                                                                <div className="add-return-wrap">
                                                                    <button type="button" className="add-return-button">
                                                                        <PlusCircle/>
                                                                        Add Return
                                                                    </button>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="hazetrip-traveler-wrapper">
                                                            <div className="hazetrip-traveler">
                                                                <div className="traveler-count">01</div>
                                                                <div className="traveler-action">
                                                                    <div className="title">Traveler</div>
                                                                    <div className="icon">
                                                                        <Traveler/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="hazetrip-traveler-seat">
                                                                <div className="traveler-seat-action">
                                                                    <div className="title">Premium Economy</div>
                                                                    <div className="icon">
                                                                        <PremiumEconomy/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="hazetrip-search-button">
                                                    <Link className="hazetrip-button primary hazetrip-button-with-icon"
                                                          to="/flight-search-result">
                                                        Search Flight
                                                        <span><RunningFlight/></span>
                                                    </Link>

                                                    {/*<button*/}
                                                    {/*    className="hazetrip-button primary hazetrip-button-with-icon">*/}
                                                    {/*    Search Flight*/}
                                                    {/*    <span><RunningFlight/></span>*/}
                                                    {/*</button>*/}
                                                </div>
                                            </div>
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
