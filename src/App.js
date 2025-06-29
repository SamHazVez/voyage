import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

const icon = new Icon({
    iconUrl: require("./icons/pin.png"),
    iconSize: [38, 38],
});

const customIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true),
    });
};

const markers = [
    {
        geocode: [41.879163, 12.492739],
        popUp: "Thermes de Caracalla",
    },
    {
        geocode: [41.890500, 12.492600],
        popUp: "Colisée de Rome",
    },
    {
        geocode: [41.888333, 12.486944],
        popUp: "Mont Palatin",
    },
    {
        geocode: [41.892530, 12.485710],
        popUp: "Forum romain",
    },
    {
        geocode: [41.900875, 12.483167],
        popUp: "Fontaine de Trévi",
    },
    {
        geocode: [41.898604, 12.476816],
        popUp: "Panthéon",
    },
    {
        geocode: [41.898889, 12.473056],
        popUp: "Piazza Navona",
    },
    {
        geocode: [41.906390, 12.454440],
        popUp: "Musées du Vatican",
    },
    {
        geocode: [41.903036, 12.454398],
        popUp: "Chapelle Sixtine",
    },
    {
        geocode: [41.902222, 12.456389],
        popUp: "Place Saint-Pierre",
    },
    {
        geocode: [41.902220, 12.453330],
        popUp: "Basilique Saint-Pierre",
    },
    {
        geocode: [40.751111, 14.490000],
        popUp: "Pompéi",
    },
    {
        geocode: [40.821389, 14.425556],
        popUp: "Vésuve",
    },
    {
        geocode: [40.633333, 14.600000],
        popUp: "Côte amalfitaine",
    },
    {
        geocode: [40.666389, 16.610278],
        popUp: "Sassi di Matera",
    },
    {
        geocode: [40.816670, 16.416670],
        popUp: "Gravina in Puglia",
    },
    {
        geocode: [41.700000, 12.683330],
        popUp: "Genzano di Roma",
    },
];


export default function App() {
    return (
        <MapContainer center={[41, 12]} zoom={5}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={customIcon}>
                {markers.map((marker) => (
                    <Marker position={marker.geocode} icon={icon}>
                        <Popup>
                            <div style={{ textAlign: 'center' }}>
                                <h3>{marker.popUp}</h3>
                                <img
                                src={marker.image}
                                alt={marker.popUp}
                                style={{ width: '150px', borderRadius: '8px' }}
                                />
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
