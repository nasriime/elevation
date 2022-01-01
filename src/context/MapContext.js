import React, { createContext, useState } from "react";

export const MapContext = createContext();

const MapContextProvider=(props)=>{
    const [changedLatLng, setChangedLatLng] = useState([]);

    const changeLatLng = (val)=>{
        setChangedLatLng(val)
    }

    return(
        <MapContext.Provider value={{ changedLatLng, changeLatLng }} >
            {props.children}
        </MapContext.Provider>
    )
}

export default MapContextProvider;