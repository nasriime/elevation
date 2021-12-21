import React, {useState} from 'react';
import Map from './Map';
import UserForm from './UserForm';

function App() {
  const [changedLatLng, setChangedLatLng] = useState([]);

  return (
    <div>
      <h1>Elevation Finder</h1>
      <UserForm newLatLng={val=>setChangedLatLng(val)}/>
      <Map resetLatLng={()=> setChangedLatLng([])} changedLatLng={changedLatLng} />
    </div>
  );
}

export default App;
