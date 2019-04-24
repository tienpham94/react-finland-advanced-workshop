import {useRef, useEffect} from 'react'
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const useMap = () => {
  const element = useRef(null);

  useEffect(() => {
    const map = Leaflet.map(element.current).setView([51.505, -0.09], 13);

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });

  return element
}

export default useMap