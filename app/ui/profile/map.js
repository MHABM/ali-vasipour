import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Define a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function SimpleMap() {
  return (
    <div className="w-full h-52">
      <MapContainer 
        style={{ width: "100%", height: "100%" }} 
        center={[35.71993025440615, 51.40472054713378]} 
        zoom={14}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[35.71993025440615, 51.40472054713378]} icon={customIcon} />
      </MapContainer>
    </div>
  );
}