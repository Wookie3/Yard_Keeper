
import { useState } from 'react';
import Navbar from './Navbar';
import './Services.css';

const Services = () => {
  const [contentState, setContentState] = useState("stonework");
  console.log(contentState)
  const ScerviceTab = ({tabState, title}) => {
  return (
    <button className={`tab-${contentState == tabState ? 'active':'inactive'}`} 
          onClick={() => setContentState(tabState)}>
      {title}
        </button>
  )
}
  return (
    <>
    <Navbar/>
      <div className="services-tabs">
        <ScerviceTab tabState= "planting" title= "Planting"/>
        <ScerviceTab tabState= "stonework" title= "Stonework"/>
        <ScerviceTab tabState= "lighting" title= "Lighting"/>
        <ScerviceTab tabState= "snow" title= "Snow & Ice"/>
      </div>
      <div className="service-content">
      {contentState == "snow" && <SnowRemoval />}
      {contentState == "planting" && <Planting />}
      {contentState == "stonework" && <Stonework />}
      {contentState == "lighting" && <Lighting />}
      </div>
    </>
  )
}

const SnowRemoval = () => {
  return (
    <div className="service-div">
      <p>
        Contact us today about our seasonal snow removal services. We offer a range of snow removal services for all sizes of properties.
      </p>
    </div>
  )
}

const Planting = () => {
  return (
    <div className="service-div">
      We offer a wide range of planting options including...
    </div>
  )
}

const Stonework = () => {
  return (
    <div className="service-div">
      We offer a wide range of stonework options...
    </div>
  )
}
const Lighting = () => {
  return (
    <div className="service-div">
      We offer a wide range of lighting options...
    </div>
  )
}
export default Services;