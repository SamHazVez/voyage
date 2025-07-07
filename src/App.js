import "./assets/css/styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { destinations } from "./data/destinations";
import ImageCarousel from "./components/ImageCarousel";
import { getMarkerImages } from "./utils/imageLoader";

const icon = new Icon({
    iconUrl: require("./assets/icons/pin.png"),
    iconSize: [38, 38],
});

const customIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true),
    });
};

export default function App() {
    return (
        <MapContainer center={[41, 12]} zoom={3}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={customIcon}>
                {destinations.map((dest) =>
                    dest.markers.map((m) => (
                        <Marker key={`${dest.id}-${m.id}`} position={m.geocode} icon={icon}>
                            <Popup minWidth={600}>
                                <div style={{ textAlign: "center" }}>
                                    <h3>{m.popUp}</h3>
                                    <small>{dest.date}</small>
                                    <ImageCarousel images={getMarkerImages(dest.id, m.id)} />
                                </div>
                            </Popup>
                        </Marker>
                    ))
                )}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
