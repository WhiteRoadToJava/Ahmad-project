import React from "react";
import { serviceData } from "../../assets/assiets";
import "../../styles/topservice.css";
import Card from "../Card";
const TopServices = () => {
  const services = serviceData;
  if (!services) return null;
  return (
    <div className="top-services-container">
      <div className="top-services-content">
      <h1>Unsere Leistungen für Sie</h1>
      <p>BROTHERS GARTEN-LANDSCHAFTSBAU</p>
      </div>
      <div className="top-services-cards">
        {services.map((service, index) => {
          return <Card key={index} cardDetails={service} />;
        })}
      </div>
    </div>
  );
};

export default TopServices;
