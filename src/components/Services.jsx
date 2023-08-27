import { useState } from "react";
import "../styles/Services.css";
import ContactBox from "./ContactBox";

const Services = () => {
  const [contentState, setContentState] = useState("planting");
  console.log(contentState);
  const ScerviceTab = ({ tabState, title }) => {
    return (
      <button
        className={`tab-${contentState == tabState ? "active" : "inactive"}`}
        onClick={() => setContentState(tabState)}
      >
        {title}
      </button>
    );
  };

  return (
    <>
      <div className="services-tabs">
        <ScerviceTab tabState="planting" title="Planting" />
        <ScerviceTab tabState="stonework" title="Stonework" />
        <ScerviceTab tabState="trees" title="Trees & Shrubs" />
        <ScerviceTab tabState="snow" title="Snow & Ice" />
        <ScerviceTab tabState="bed" title="Bed Care" />
        <ScerviceTab tabState="irrigation" title="Irrigation & Drainage" />
      </div>
      <div className="service-content">
        {contentState == "snow" && [<SnowRemoval />]}
        {contentState == "planting" && <Planting />}
        {contentState == "stonework" && <Stonework />}
        {contentState == "bed" && <BedCare />}
        {contentState == "trees" && <TreeShrub />}
        {contentState == "irrigation" && <Irrigation />}
      </div>
      <ContactBox />
    </>
  );
};

const Irrigation = () => {
  return (
    <div className="service-div">
      <img
        src="https://images.squarespace-cdn.com/content/v1/6448453d7c4ec86461d66cb3/21e71a75-ae31-4e49-9684-8c106b64d55e/ResIrr006.jpg"
        alt="irrigation example"
      />
      <p>
        A professionally installed and maintained irrigation system is an
        investment in your property.
      </p>
      <p>
        We offer a wide range of irrigation and drainage options including drip
        zone installations, sprinkler system installations, and drainage
        solutions. Our garden experts can also determine the best watering
        schedule for your space to ensure your plants are getting the right
        amount of water. We also offer spring start-up and fall shut-down
        services for your irrigation system.
      </p>
    </div>
  );
};

const SnowRemoval = () => {
  return (
    <div className="service-div">
      <img
        src="https://www.simple-solutions.ca/wp-content/uploads/2018/03/stone-work-7-1.jpg"
        alt="stone walkway"
      />
      <p>
        Contact us today about our seasonal snow removal services. We offer a
        range of snow removal services for all sizes of properties.
      </p>
      <p>
        We are here to keep your property safe and accessible during the winter
        months. Our crews are ready day or night with the necessary supplies and
        equipment to remove snow accumulations while our proactive ice
        management mitigates dangerous situations before they occur. We don’t
        just monitor the weather forecast leading up to the storm, we also plan
        according to when the weather will hit and what’s going to happen after
        the storm.
      </p>
    </div>
  );
};

const Planting = () => {
  return (
    <div className="service-div">
      <img
        src="https://clipart-library.com/image_gallery/n1117905.jpg"
        alt="top down view of a drawn planting plan"
      />
      {/* <img
        src="https://southernlivingplants.com/wp-content/uploads/idea-house-entrance-garden-social.jpg"
        alt="drawn planting plan for entrance"
      /> */}
      <p>
        We offer a wide range of planting options ranging from small garden beds
        to large commercial properties, our team is able to provide extensive
        planting services to fit your needs. All of our designed planting
        projects come with a complimentary planting plan and a follow up visit
        to ensure the plants are thriving weeks later.
      </p>
    </div>
  );
};

const Stonework = ({}) => {
  return (
    <div className="service-div">
      
      <img
        src="https://www.designscapescolorado.com/files/239/8/68/10_A-Neoclassic-Formal-Garden_bu.jpg"
        alt="stonework around pool"
      />
      <p>We offer a wide range of stonework options.</p>
      <p>
        Today, while not applied to the same scale as in these historic
        structures, stone construction is still a feasible option for homeowners
        looking to enrich the visual appeal of their residence and/or the manner
        in which they move about and enjoy their property. Stone landscaping, or
        stone work, offers a unique combination of charm and functionality. As
        an added service, Yard Keeper staff can coordinate the purchase and
        delivery of all stone and other project materials at no incremental
        cost.
      </p>
    </div>
  );
};
const TreeShrub = () => {
  return (
    <div className="service-div">
      <img
        src="https://www.designscapescolorado.com/files/239/4/44/1010-E-Stanford-Ave8011_bu.jpg"
        alt="stone pillar with light"
      />
      <p>
        Tree and Shrub Replacement - Do you have dying trees or shrubbery
        ruining the appearance of your property? Or are you simply looking to
        spice up your foliage? Let us take care of all your tree and shrub
        removal and planting needs.
      </p>
    </div>
  );
};
const BedCare = () => {
  return (
    <div className="service-div">
      {/* <img
        src="https://www.designscapescolorado.com/files/239/4/44/DesignscapesJune4792_bu.jpg"
        alt="garden bed with flowers"
      /> */}
      <img
        src="https://www.designscapescolorado.com/files/pluginfiles/item_44/field_239/DesignScapes_E.StanfordAve_7.11.17-7_bu.jpg"
        alt="garden"
      />

      <p>
        Our Bed Care program is tailored around each homeowner’s specific needs
        in order to achieve the best looking gardens throughout the season.
        Because each property is different, our experienced team of garden
        specialists will customize a package to ensure lasting beauty and
        harmonious garden design. Services can include weekly or bi-weekly
        weeding, dead-heading, trimming, fertilizer applications, plantings, and
        over-all bed maintenance.
      </p>
    </div>
  );
};

export default Services;
