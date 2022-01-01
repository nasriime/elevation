import React, {useState, useContext} from 'react';
import {MapContext} from '../context/MapContext';
import "./UserForm.scss";

function UserForm(props) {
   const { changeLatLng } = useContext(MapContext);
   const [lat, setLat] = useState(51.505);
   const [lng, setLng] = useState(-0.09);

   const _onSubmit= (e)=>{
      e.preventDefault();
      changeLatLng([lat, lng])
   }

    return (
      <div className="user-form">
         <div>
            <label><strong>latitude</strong></label>
            <input type="number" value={lat} onChange={e=> setLat(Number(e.target.value))} />
            <label><strong>Longitude</strong></label>
            <input type="number" value={lng} onChange={e=> setLng(Number(e.target.value))} />
         </div>
         {/* <div className="btn-wrapper"> */}
            <button onClick={e=>_onSubmit(e)}>Calculate</button>
         {/* </div> */}
       </div>
    );
  }
  
  export default UserForm;