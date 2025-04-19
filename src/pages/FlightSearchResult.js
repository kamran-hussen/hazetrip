

import { Link } from "react-router-dom";
import Nav from "../components/sidebar/Nav";
import logo from '../images/logo.svg';
import Header from "../components/header/Header";
import RunningFlight from "../components/icons/RunningFlight";
import ChevronDown from "../components/icons/ChevronDown";
import Deposit from "../components/icons/Deposit";
import Check from "../components/icons/Check";

const FlightSearchResult = () => {

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
                        <div className="flight-search-result-container">
                            <div className="search-summary-card">
                                <div className="search-summary-card-content">
                                    <h2 className="flight-route">Dhaka (DAC) — Kuala Lumpur (KUL)</h2>
                                    <div className="flight-details">
                                        <span>Departure: <strong>25 Mar, 25 Saturday</strong></span>
                                        <span>Travellers: <strong>02</strong></span>
                                        <span>Travel Class: <strong>Economy</strong></span>
                                        <span>Book Flight: <strong>One Way</strong></span>
                                    </div>
                                </div>
                                <button className="hazetrip-button primary-soft">
                                    modify search
                                    <RunningFlight/>
                                </button>
                            </div>

                            <div className="sidebar-filters">

                                <section className="filter-item">
                                    <div className="filter-item-action">
                                        <h5 className="title">
                                            Departure Times
                                        </h5>
                                        <ChevronDown/>
                                    </div>

                                    <div className="time-filter-wrap">
                                        <p className="from-country">
                                            from dhaka
                                        </p>
                                        <div className="time-filter">
                                            <button
                                                type="button">
                                                <Deposit/>
                                                00-06 AM
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                06-12 pM
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                12-06 pm
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                06-12 AM
                                            </button>

                                        </div>
                                    </div>
                                </section>

                                <section className="filter-item">
                                    <div className="filter-item-action">
                                        <h5 className="title">
                                            Arrival Times
                                        </h5>
                                        <ChevronDown/>
                                    </div>

                                    <div className="time-filter-wrap">
                                        <p className="from-country">
                                            At Kuala Lumpur
                                        </p>
                                        <div className="time-filter">
                                            <button
                                                type="button">
                                                <Deposit/>
                                                00-06 AM
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                06-12 pM
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                12-06 pm
                                            </button>
                                            <button
                                                type="button">
                                                <Deposit/>
                                                06-12 AM
                                            </button>

                                        </div>
                                    </div>
                                </section>

                                <section className="filter-item">
                                    <div className="filter-item-action">
                                        <h5 className="title">
                                            Filter by Airlines
                                        </h5>
                                        <ChevronDown/>
                                    </div>
                                    <div className="filter-by-wrap">
                                        <label htmlFor="a1" className="form-label">
                                            <div className="form-checkbox">
                                                <input type="checkbox" id="a1" className="sr-only"/>
                                                <div className="form-checkbox-inner">
                                                 <span className="form-check">
                                                    <Check/>
                                                 </span>
                                                </div>
                                            </div>
                                            Singapore Airlines
                                        </label>



                                    </div>
                                </section>


                                {/*                      <section className="mb-6">*/}
                                {/*                          <div className="flex justify-between items-center cursor-pointer">*/}
                                {/*                              <h2 className="text-base font-semibold leading-5">*/}
                                {/*                                  Filter by Airlines*/}
                                {/*                              </h2>*/}
                                {/*                              <i className="fas fa-chevron-down text-gray-400">*/}
                                {/*                              </i>*/}
                                {/*                          </div>*/}
                                {/*                          <ul className="mt-4 space-y-3">*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input checked=""*/}
                                {/*                                             className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"*/}
                                {/*                                             type="checkbox"/>*/}
                                {/*                                      <img alt="Green checkmark icon" className="hidden" height="16"*/}
                                {/*                                           src="https://storage.googleapis.com/a1aa/image/03032e0a-0cf7-4058-1a16-e8ab1ad5621b.jpg"*/}
                                {/*                                           width="16"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Singapore Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳56,148*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  US-Bangla Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  SriLankan Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  China Southern Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Malaysia Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Emirates*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Turkish Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                              <li className="flex items-center justify-between">*/}
                                {/*                                  <label className="flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <i className="fas fa-times text-red-600 text-xs">*/}
                                {/*                                      </i>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Biman Bangladesh Airlines*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                                  <span className="text-xs font-normal text-gray-400">*/}
                                {/* ৳34,179*/}
                                {/*</span>*/}
                                {/*                              </li>*/}
                                {/*                          </ul>*/}
                                {/*                      </section>*/}

                                {/*                      <section className="mb-6">*/}
                                {/*                          <div className="flex justify-between items-center cursor-pointer">*/}
                                {/*                              <h2 className="text-base font-semibold leading-5">*/}
                                {/*                                  Refundability*/}
                                {/*                              </h2>*/}
                                {/*                              <i className="fas fa-chevron-down text-gray-400">*/}
                                {/*                              </i>*/}
                                {/*                          </div>*/}
                                {/*                          <ul className="mt-4 space-y-3">*/}
                                {/*                              <li>*/}
                                {/*                                  <label className="inline-flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Non Refundable*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                              </li>*/}
                                {/*                              <li>*/}
                                {/*                                  <label className="inline-flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Refundable*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                              </li>*/}
                                {/*                          </ul>*/}
                                {/*                      </section>*/}

                                {/*                      <section>*/}
                                {/*                          <div className="flex justify-between items-center cursor-pointer">*/}
                                {/*                              <h2 className="text-base font-semibold leading-5">*/}
                                {/*                                  Number of Stops*/}
                                {/*                              </h2>*/}
                                {/*                              <i className="fas fa-chevron-down text-gray-400">*/}
                                {/*                              </i>*/}
                                {/*                          </div>*/}
                                {/*                          <ul className="mt-4 space-y-3">*/}
                                {/*                              <li>*/}
                                {/*                                  <label className="inline-flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  Non-Stop*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                              </li>*/}
                                {/*                              <li>*/}
                                {/*                                  <label className="inline-flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  1 Stop*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                              </li>*/}
                                {/*                              <li>*/}
                                {/*                                  <label className="inline-flex items-center space-x-2 cursor-pointer">*/}
                                {/*                                      <input*/}
                                {/*                                          className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"*/}
                                {/*                                          type="checkbox"/>*/}
                                {/*                                      <span className="text-sm font-normal text-gray-900">*/}
                                {/*  2 Stops*/}
                                {/* </span>*/}
                                {/*                                  </label>*/}
                                {/*                              </li>*/}
                                {/*                          </ul>*/}
                                {/*                      </section>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightSearchResult;
