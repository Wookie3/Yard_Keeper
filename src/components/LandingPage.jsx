import { Typography, Tooltip, Fade } from "@mui/material";
import "../styles/LandingPage.css";
import FAQ from "./faq.jsx";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const gotoSchedule = (e) => {
    navigate("/schedule");
  };
  const gotoService = (e) => {
    navigate("/services");
  };
  const gotoDesign = (e) => {
    navigate("/design");
  };

  return (
    <div className="landing">
      <Typography variant="h5" className="intro">
        Select one of our options to get started today
      </Typography>

      <div className="selections">
        <Tooltip
          title="Select whats days you want maintenance"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <div className="select-box" onClick={gotoSchedule}>
            <div>
              <p>Scheduled Maintinance</p>
              <img
                src="https://www.lawrenceparkgardencare.com/wp-content/uploads/2020/06/inte-expert-bg5.jpg"
                alt="green freshly cut lawn"
              ></img>
            </div>
          </div>
        </Tooltip>
        <Tooltip
          title="See our specialty services"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <div className="select-box" onClick={gotoService}>
            <div>
              <p>Specialty Maintinance</p>
              <img
                src="https://www.lawrenceparkgardencare.com/wp-content/uploads/2020/11/planting-portfolio.jpg"
                alt="garden beds"
              ></img>
            </div>
          </div>
        </Tooltip>
        <Tooltip
          title="Work with our landscape design team"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <div className="select-box" onClick={gotoDesign}>
            <div>
              <p>Landscape Design </p>
              <img
                id="img-3"
                src="https://www.simpliscapes.com/wp-content/uploads/2020/01/Backyard-Landscape-Design-In-London-Ontario-SimpliScapes-600x425.jpg"
                alt="landscape design example"
              ></img>
            </div>
          </div>
        </Tooltip>
      </div>
      <FAQ />
    </div>
  );
};

export default LandingPage;
