import React from 'react';
import MapContextProvider from '../context/MapContext';
import Map from './Map';
import UserForm from './UserForm';

function App() {

  return (
    <div>
      <MapContextProvider>
        <h1>Elevation Finder</h1>
        <UserForm />
        <Map />
      </MapContextProvider>
    </div>
  );
}

export default App;
