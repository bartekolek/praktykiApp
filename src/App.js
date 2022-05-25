import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';
import './Popup.css';






function App() {
  const [isOpen, setIsOpen] = useState(false);

  const add = () => {
    setIsOpen(!isOpen);
  }

  const users = [];
  const roles = [];
  const powers = [];

  function addRole() {
    const role = document.getElementById('role').value;
    roles.push(role);
  };
  function addP() {
    const power = document.getElementById('rUser').value;
    powers.push(power);
  };
  function addUser() {
    const user = document.getElementById('user').value;
    users.push(user);
  };

  const roleItems = roles.map((rol) =>
    <li>{rol}</li>
  );
  const userItems = roles.map((usr) =>
    <li>{usr}</li>
  );

  return (
    <div className="App">
      <div className="content">
        <button onClick={add}>
          Dodaj
        </button>

      </div>
      <div className="display">
        <ul>{roleItems}</ul>
        <ul>{userItems}</ul>
      </div>

      {isOpen && <Popup
        content={<>
          Rola: <input type='text' id="role"></input><br></br>
          <button onClick={addRole}>Dodaj role</button><br></br>

          <select name="roleUsers" id="rUser">
            <option value="r">Read</option>
            <option value="w">Write</option>
            <option value="re">Read Execute</option>
            <option value="we">Write Execute</option>
            <option value="all">Read Write Execute</option>
            <option value="rw">Read Write</option>

          </select>
          <button onClick={addP}>Dodaj uprawnienie</button><br></br>

          Nazwa użytkownika: <input type='text' id="user"></input><br></br>
          <button onClick={addUser}>Dodaj role</button>


        </>}
        handleClose={add}
      />}

    </div>
  );
}

export default App;
