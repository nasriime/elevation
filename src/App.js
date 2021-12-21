import React, {useState} from 'react';
import Map from './Map';
import UserForm from './UserForm';

function App() {
  const [changedLatLng, setChangedLatLng] = useState([]);

  return (
    <div>
      <UserForm newLatLng={val=>setChangedLatLng(val)}/>
      <Map changedLatLng={changedLatLng} />
    </div>
  );
}

export default App;
