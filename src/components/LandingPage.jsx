import './LandingPage.css'
const LandingPage = () => {
    const handleClick = () => {
    }
    return (
        <>
        <p className="intro">Select from one of our options to get started today</p>
        <div className="selections">
            <div className="select-box" onClick={handleClick}>
                <a href="http://localhost:3000/schedule">
                    <p>Scheduled Maintinance</p>
                    <img src="https://www.lawrenceparkgardencare.com/wp-content/uploads/2020/06/inte-expert-bg5.jpg" alt="green freshly cut lawn"></img>
                </a>
            </div>
            <div className="select-box">
                <a href="http://localhost:3000/services">
                    <p>Specialty Maintinance</p>
                    <img src="https://www.lawrenceparkgardencare.com/wp-content/uploads/2020/11/planting-portfolio.jpg" alt="garden beds"></img>
                </a>
            </div>
            <div className="select-box">
                <a href="http://localhost:3000/design">
                    <p>Landscape Design Consultation</p>
                    <img id="img-3" src="https://www.simpliscapes.com/wp-content/uploads/2020/01/Backyard-Landscape-Design-In-London-Ontario-SimpliScapes-600x425.jpg" alt="landscape design example"></img>
                </a>
            </div>           
        </div>
        </>
    )
}

export default LandingPage;