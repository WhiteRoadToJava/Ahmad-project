import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { businessLocation } from "../../assets/assiets";
import "../../styles/locationMarket.css";

// حل مشكلة أيقونة الخريطة الافتراضية
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// 1. مكون فرعي مخصص فقط للتعامل مع النقر والتحرك
const ClickHandler = () => {
  const [clickedPos, setClickedPos] = useState(null);
  
  const map = useMapEvents({
    click(e) {
      setClickedPos(e.latlng);
      map.flyTo(e.latlng, map.getZoom()); // ا
    },
  });

  return clickedPos === null ? null : (
    <Marker position={clickedPos}>
      <Popup>This is where you clicked.</Popup>
    </Marker>
  );
};

// 2. المكون الرئيسي للخريطة
const GardenMap = () => {
        if (!businessLocation.Latitude || !businessLocation.Longitude) {
          return <div>موقع العمل غير متوفر حالياً.</div>;
        }else {
          var myBusinessLocation = [
            parseFloat(businessLocation.Latitude),
            parseFloat(businessLocation.Longitude)
          ];
        }
        

  return (
        <div className="map-container">
    <div  style={{ height: "450px", width: "50%", marginTop: "90px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <MapContainer 
        center={myBusinessLocation} 
        zoom={15} 
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* علامة مقر الشركة الثابتة */}
        <Marker position={myBusinessLocation}>
          <Popup>
            <strong>ROTHERS GARTEN-LANDSCHAFTSBAU</strong> <br />
            Mardieksweg 39<br />
            37627 Stadtoldendorf<br />
            +49 1577 9878532<br />
            Brothersgartenbau@gmail.com
          </Popup>
        </Marker>

        {/* استدعاء مكون النقرات هنا ليعمل بشكل مستقل */}
        <ClickHandler />
      </MapContainer>
    </div>

    <div style={{ width: "40%", marginTop: "90px", marginLeft: "20px" }}>
      <h2>Our Location</h2>
      <p>
        Address: Mardieksweg 39, 37627 Stadtoldendorf<br />
        Phone: +49 1577 9878532<br />
        Email: Brothersgartenbau@gmail.com
      </p>
    </div>
    </div>
  );
};
export default GardenMap;