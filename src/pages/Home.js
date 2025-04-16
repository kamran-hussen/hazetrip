import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import Nav from "../components/sidebar/Nav";
import Cta from "../components/cta/Cta";


const Home = () => {
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
                    <div className="hazetrip-stats">
                        <div className="hazetrip-cta">
                            <Cta title="Reservation Support" number="+088 01723894386" text="demo@example.com"/>
                            <Cta title="Sales Support" number="+088 01723894386" text="demo@example.com"/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
