import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { blue } from "@mui/material/colors";

const faqHead = {
  textAlign: "center",
  paddingBottom: "15px",
  paddingTop: "15px",
  backgroundColor: "#72a069",
};
const accordionDiv = {
  margin: "0 15px",
  alighItems: "center",

};
const accordionMain = {
  backgroundColor: "success.light",
};
const accordionHead = {
  backgroundColor: "success.main",
};

const FAQ = () => {
  return (
    <div style={accordionDiv}>
      <Typography variant="h4" sx={faqHead}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon />} 
        sx={accordionHead}>
          <Typography variant="h6">
            What is the process for scheduling a landscape design consultation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionMain}>
          <Typography>
            To schedule a landscape design consultation, please fill out the
            form on the Landscape Design page along with your email and
            preferred contact information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon />} 

        sx={accordionHead}>
          <Typography variant="h6">
            How long will it take for you to process my landscape design
            request?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionMain}>
          <Typography>
            One of our team members will reach out to you within 5 business days
            of receving a request, depending on traffic. Often we area able to
            get back to you within 24 hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}  sx={accordionHead}>
          <Typography variant="h6">
            How do I schedule a specialty maintenance service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionMain}>
          <Typography>
            To schedule a specialty maintenance service, please contact us via
            email or phone. Our contact information can be found at the bottom
            of the page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}  sx={accordionHead}>
          <Typography variant="h6">
            Will I be reimbursed if the service is not completed on time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionMain}>
          <Typography>
            Yes, if the service is ever not completed you will be completely
            reimbursed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
