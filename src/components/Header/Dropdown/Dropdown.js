import React, { useState } from 'react';
import './Dropdown.css';
import { SettingsIcon } from './SettingsIcon';

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const logOut = function () {
    console.log('logout');
  };

  const preference = function () {
    console.log('preference');
  };

  return (
    <div className="Dropdown-Inner">
      <button
        className={open ? 'Dropdown-Button active' : 'Dropdown-Button'}
        onClick={handleOpen}
      >
        <SettingsIcon />
      </button>
      {open ? (
        <ul className="Dropdown-Menu">
          <li className="Drop-Menu-Item">
            <button className="Drop-Button" onClick={logOut}>
              Logout
            </button>
          </li>
          <li className="DropMenu-Item">
            <button className="Drop-Button" onClick={preference}>
              Preference
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
