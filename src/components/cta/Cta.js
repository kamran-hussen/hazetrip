import Call from "../icons/Call";

const Cta = ({title, number, text}) => {
    return (
        <div className="hazetrip-cta-card">
            <h5 className="title">{title}</h5>
            <div className="hazetrip-cta-card-content">
                <div className="hazetrip-icon">
                    <Call/>
                </div>
                <div className="cta-content">
                    <div className="number">{number}</div>
                    <div className="text">{text}</div>
                </div>
            </div>
        </div>
    )
}

export default Cta;
