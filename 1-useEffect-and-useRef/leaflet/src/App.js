import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const StyledDiv = styled.div`
  height: 300px;
  margin-top: 50px;
  position: relative;
`

const App = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(mapElement.current).setView([51.505, -0.09], 13);
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  }, [])
  
  return (
      <StyledDiv ref={mapElement}/>
  );
}

export default App;
