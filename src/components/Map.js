import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import AddMarkerToClick from "./AddMarkerToClick";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "./Map.scss";

function Map(props){
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return(
        <div>
           <MapContainer 
                center={[51.505, -0.09]}       
                zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <AddMarkerToClick />
            </MapContainer>
        </div>
    )
}

export default Map;