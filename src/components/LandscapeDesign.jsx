import "../styles/LandscapeDesign.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const LandscapeDesign = () => {
  const [openMessage, setOpenMessage] = useState(false);

  const [disc, setDisc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paperDrawing, setPaperDrawing] = useState(true);
  const [digitalDrawing, setDigitalDrawing] = useState(true);
  const [tDDrawing, setTDDrawing] = useState(false);
  const [contactMe, setContactMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(e.target.disc.value);
    setOpenMessage(true);
  };
  const handleClose = () => {
    setOpenMessage(false);
  };

  const discStyle = {
    height: "25vw",
    width: "80vw",
    fontSize: "18px",
    padding: 0,
    margin: 0,
    backgroundColor: "#e2dbd2",
  };

  return (
    <div className="designMain">
      <div className="designHeader">
        <h1>Landscape Design Requests</h1>
        <p>
          Fill out the following form with your contact information so we can
          get back to you!
        </p>
      </div>
      <Dialog open={openMessage} onClose={handleClose}>
        <DialogTitle id="popup-title">
          Thank you for your request!
          <DialogContent className="dialogContent">
            <DialogContentText id="form-result">
              <p>Description: {disc}</p>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Address: {address}</p>
              <p>Paper Drawing: {paperDrawing ? "Yes" : "No"}</p>
              <p>Digital Drawing: {digitalDrawing ? "Yes" : "No"}</p>
              <p>3D Drawing: {tDDrawing ? "Yes" : "No"}</p>
              <p>Contact me about promotions: {contactMe ? "Yes" : "No"}</p>
              <p>We will be in contact soon!</p>
            </DialogContentText>
            <Button onClick={handleClose}>Close</Button>
          </DialogContent>
        </DialogTitle>
      </Dialog>
      <form className="designForm" onSubmit={handleSubmit}>
        <textarea
          style={discStyle}
          name="disc"
          placeholder="Description"
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          required
        />
        <div className="options">
          <input
            className="designInput"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="designInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="designInput"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="designInput"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              name="paperDrawing"
              value={paperDrawing}
              defaultChecked={true}
              onChange={(e) => setPaperDrawing(e.target.checked)}
            />
            Include Paper Drawing
          </label>
          <label>
            <input
              type="checkbox"
              name="digitalDrawing"
              value={digitalDrawing}
              defaultChecked={true}
              onChange={(e) => setDigitalDrawing(e.target.checked)}
            />
            Include Digital Drawing
          </label>
          <label>
            <input
              type="checkbox"
              name="3dDrawing"
              value={tDDrawing}
              defaultChecked={false}
              onChange={(e) => setTDDrawing(e.target.checked)}
            />
            Include 3D Drawing
          </label>
          <label>
            <input
              type="checkbox"
              name="contactMe"
              value={contactMe}
              defaultChecked={false}
              onChange={(e) => setContactMe(e.target.checked)}
            />
            Contact me about promotions
          </label>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandscapeDesign;
