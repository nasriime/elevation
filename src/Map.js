import React, {useState} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "./Map.css";

function AddMarkerToClick() {
    const [markers, setMarkers] = useState([]);
    const [elevation, setElevation] = useState();

    const calculateElevation = (newMarker)=>{
        fetch(`https://api.opentopodata.org/v1/test-dataset?locations=${newMarker.lat},${newMarker.lng}`)
            .then(res => res.json())
            .then(
              (res) => {
                  setElevation(res.results[0]["elevation"])
              },
              (err) => {
                  console.log('err', err)
              }
            )
    }

    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng;
        calculateElevation(newMarker)
        setMarkers([newMarker]);
      },
    })
  
    return (
      <>
        {markers.map((marker, idx) => 
          <Marker key={`marker-${idx}`} position={marker}>
            <Tooltip permanent>
                <span>elevation {elevation}</span>
            </Tooltip>
          </Marker>
        )}
      </>
    )
  }

function Map(){
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