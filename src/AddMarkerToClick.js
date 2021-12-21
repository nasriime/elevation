import React, {useState, useEffect} from 'react';
import { Marker, Tooltip, useMapEvents } from 'react-leaflet'


function AddMarkerToClick({changedLatLng, resetLatLng}) {
    const [markers, setMarkers] = useState([]);
    const [elevation, setElevation] = useState();

    const calculateElevation = (newMarker)=>{
      const lat = newMarker.lat ? newMarker.lat : newMarker[0];
      const lng = newMarker.lng ? newMarker.lng : newMarker[1];
        fetch(`https://api.opentopodata.org/v1/test-dataset?locations=${lat},${lng}`)
            .then(res => res.json())
            .then(
              (res) => {
                if(res.results && res.results[0]){
                  setElevation(res.results[0]["elevation"])
                }else{
                  setElevation();
                  resetLatLng()
                  alert('Invalid longtitude or latitiude')
                }
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

    useEffect(() => {
        if(changedLatLng && changedLatLng[0]){
          calculateElevation(changedLatLng)
          setMarkers([changedLatLng]);
          map.panTo(changedLatLng);
        }
      }, [changedLatLng])
  
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


  export default AddMarkerToClick;