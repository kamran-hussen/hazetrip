import Reward from "../icons/Reward";
import PartialPayment from "../icons/PartialPayment";
import Reload from "../icons/Reload";
import EmergencyBalance from "../icons/EmergencyBalance";
import PlusCircle from "../icons/PlusCircle";
import DepositRequest from "../icons/DepositRequest";

const Stats = () => {
    return (
        <>
            <div className="hazetrip-stats-card rewards-card">
                <div className="stat-content">
                    <div className="stat-icon">
                        <Reward />
                    </div>
                    <h5 className="stat-title">Rewards Points</h5>
                </div>
                <div className="stat-content-footer">
                    <div className="stat-value">12.6K</div>
                </div>
            </div>
            <div className="hazetrip-stats-card partial-card">
                <div className="stat-content">
                    <div className="stat-icon">
                        <PartialPayment />
                    </div>
                    <h5 className="stat-title">Partial Due</h5>
                </div>
                <div className="stat-content-footer">
                    <div className="stat-value">1.5K BDT</div>
                    <div className="state-action-icon">
                        <Reload />
                    </div>
                </div>
            </div>
            <div className="hazetrip-stats-card emergency-credit-card">
                <div className="stat-content">
                    <div className="stat-icon">
                        <EmergencyBalance />
                    </div>
                    <h5 className="stat-title">Emergency Credit</h5>
                </div>
                <div className="stat-content-footer">
                    <div className="stat-value">640 BDT</div>
                    <div className="state-action-icon">
                        <PlusCircle />
                    </div>
                </div>
            </div>
            <div className="hazetrip-stats-card balance-card">
                <div className="stat-content">
                    <div className="stat-icon">
                        <DepositRequest />
                    </div>
                    <h5 className="stat-title">Balance</h5>
                </div>
                <div className="stat-content-footer">
                    <div className="stat-value">12.9K BDT</div>
                    <div className="state-action-icon">
                        <PlusCircle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stats;
