import "./UserForm.css";

function UserForm(props) {
    return (
       <div className="user-form">
          <label>Langutitde</label>
          <input type="number" />
          <label>latitude</label>
          <input type="number" />
          <button>Calulate</button>
       </div>
    );
  }
  
  export default UserForm;