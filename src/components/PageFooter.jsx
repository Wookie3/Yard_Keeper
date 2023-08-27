import "../styles/PageFooter.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const iconStyle = {
  fontSize: "30px",
  padding: "10px 5px",
  margin: 0,
  opacity: 1,
};
const Footer = () => {
  return (
    <footer className="pageFooter">
      <p>
        Call Us:{" "}
        <a className="phone" href="tel:416-555-5555">
          416-555-5555
        </a>
      </p>

      <div className="social-links">
        <p>Social Links: </p>
        <InstagramIcon
          sx={iconStyle}
          onClick={() => window.open("https://www.instagram.com/")}
          className="social-button"
        />
        <LinkedInIcon
          sx={iconStyle}
          onClick={() => window.open("https://www.linkedin.com/")}
          className="social-button"
        />
        <YouTubeIcon
          sx={iconStyle}
          onClick={() => window.open("https://www.youtube.com/")}
          className="social-button"
        />
        <ThumbUpOffAltIcon
          sx={iconStyle}
          onClick={() => window.open("https://www.yelp.com/")}
          className="social-button"
        />
      </div>
    </footer>
  );
};

export default Footer;
