import "./assets/css/styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { destinations } from "./data/destinations";
import { wishlist } from "./data/wishlist";
import ImageCarousel from "./components/ImageCarousel";
import SideMenu from "./components/SideMenu";
import { useRef } from "react";

const icon = new Icon({
    iconUrl: require("./assets/icons/pin.png"),
    iconSize: [38, 38],
});

const wishlistIcon = new Icon({
    iconUrl: require("./assets/icons/pin-wishlist.png"),
    iconSize: [38, 38],
});

const customIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true),
    });
};

const customWishlistIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon-wishlist">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster-wishlist",
        iconSize: point(33, 33, true),
    });
};

export default function App() {
    const mapRef = useRef(null);

    return (
        <>
            <SideMenu 
                destinations={destinations}
                wishlist={wishlist}
                mapRef={mapRef}
            />
            <MapContainer center={[41, 12]} zoom={3} ref={mapRef}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {/* Destinations visitées */}
            <MarkerClusterGroup chunkedLoading iconCreateFunction={customIcon}>
                {destinations.map((dest) =>
                    dest.markers.map((m) => (
                        <Marker key={`${dest.id}-${m.id}`} position={m.geocode} icon={icon}>
                            <Popup>
                                <div style={{ textAlign: "center" }}>
                                    <h3>{m.popUp}</h3>
                                    <small>{dest.date}</small>
                                    <ImageCarousel destination={dest.id} />
                                </div>
                            </Popup>
                        </Marker>
                    ))
                )}
            </MarkerClusterGroup>
            {/* Destinations wishlist */}
            <MarkerClusterGroup chunkedLoading iconCreateFunction={customWishlistIcon}>
                {wishlist.map((dest) =>
                    dest.markers.map((m) => (
                        <Marker key={`wishlist-${dest.id}-${m.id}`} position={m.geocode} icon={wishlistIcon}>
                            <Popup>
                                <div style={{ textAlign: "center" }}>
                                    <h3>{m.popUp}</h3>
                                    <small>{dest.date}</small>
                                    <p>Destination souhaitée</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                )}
            </MarkerClusterGroup>
            </MapContainer>
        </>
    );
}
