"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

const ContactMap = () => {
  useEffect(() => {
    // Fix for default icon issue with Leaflet and Webpack
    const iconRetinaUrl = '/leaflet/marker-icon-2x.png';
    const iconUrl = '/leaflet/marker-icon.png';
    const shadowUrl = '/leaflet/marker-shadow.png';

    const DefaultIcon = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer center={[-1.286389, 36.817223]} zoom={13} scrollWheelZoom={false} className="h-full w-full grayscale">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-1.286389, 36.817223]}>
        <Popup>
            DEVSIRCH HUB <br /> Nairobi, Kenya.
        </Popup>
        </Marker>
    </MapContainer>
  );
};

export default ContactMap;