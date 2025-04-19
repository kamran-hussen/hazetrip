import Cta from "../cta/Cta";
import Stats from "../stats/Stats";
import Notification from "../icons/Notification";
import avatar from "../../images/avatar.png";

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header;
