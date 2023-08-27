import Box from "@mui/material/Box";

const boxStyle = {
  position: "absolute",
  top: "45%",
  right: "5%",
  borderRadius: "10px",
  width: "20vw",
  padding: "20px",
  border: "black solid 2px",
  backgroundColor: "#92dbb4",
};

const ContactBox = () => {
  return (
    <Box className="contact-div" sx={boxStyle}>
      <h3>Contact Us</h3>
      <p>
        Contact us today and one of our team members set up a consultation on
        your property where we can discuss your needs and provide you with a
        quote.
        <p>
          You can reach us by <a href="mailto:YardKeeper@noemail.com">email</a>
          or <a href="tel:416-555-5555">phone</a> today if you are interested in
          this service!
        </p>
      </p>
    </Box>
  );
};

export default ContactBox;
