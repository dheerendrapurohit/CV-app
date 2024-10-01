// src/components/GeneralInfo.js
import React, { useState } from 'react';
import './Style/GeneralInfo.css'


const GeneralInfo = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" value={generalInfo.name} onChange={handleChange} /><br />
          <label>Email: </label>
          <input type="email" name="email" value={generalInfo.email} onChange={handleChange} /><br />
          <label>Phone: </label>
          <input type="text" name="phone" value={generalInfo.phone} onChange={handleChange} /><br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
