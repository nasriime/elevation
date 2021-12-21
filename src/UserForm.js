import React, {useState} from 'react';
import "./UserForm.css";

function UserForm({newLatLng}) {
   const [lat, setLat] = useState(51.505);
   const [lng, setLng] = useState(-0.09);

   const _onSubmit= (e)=>{
      e.preventDefault();
      newLatLng([lat, lng])
   }

    return (
      <div className="user-form">
         <label>latitude</label>
         <input type="number" value={lat} onChange={e=> setLat(Number(e.target.value))} />
         <label>Longitude</label>
         <input type="number" value={lng} onChange={e=> setLng(Number(e.target.value))} />
         <button onClick={e=>_onSubmit(e)}>Calculate</button>
       </div>
    );
  }
  
  export default UserForm;