import {Link} from "react-router-dom";
import { useState } from "react";
import SearchFlight from "../icons/SearchFlight";
import Insights from "../icons/Insights";
import Booking from "../icons/Booking";
import ArrowDown from "../icons/ArrowDown";

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <ul className="menu-list">
            <li>
                <Link to="/" className="active">
                    <span className="title">
                        <SearchFlight/>
                        Search Flights
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <span className="title">
                        <Insights/>
                        Insights
                    </span>
                </Link>
            </li>
            <li className="menu-heading">
                ticketing
            </li>
            <li>
                <Link to="/">
                    <span className="title">
                        <Booking/>
                        All Booking
                    </span>
                </Link>
            </li>

            <li className={`has-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                <button onClick={toggleDropdown}>
                    <span className="title">
                        <Booking/>
                        Group Fare
                    </span>
                    <span className="action-icon">
                        <ArrowDown/>
                    </span>
                </button>

                {isDropdownOpen && (
                    <ul>
                        <li>
                            <Link to="/">
                            <span className="title">
                                Available Group Fare
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="title">
                                Group Fare History
                                <span className="badge danger">New</span>
                            </span>
                            </Link>
                        </li>
                    </ul>
                )}
            </li>

        </ul>
    );
}

export default Nav;
