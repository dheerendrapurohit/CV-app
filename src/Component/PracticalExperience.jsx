// src/components/PracticalExperience.js
import React, { useState } from 'react';
import './Style/PracticalExperience.css'

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [practicalExperience, setPracticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPracticalExperience({ ...practicalExperience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Company Name: </label>
          <input type="text" name="companyName" value={practicalExperience.companyName} onChange={handleChange} /><br />
          <label>Position Title: </label>
          <input type="text" name="positionTitle" value={practicalExperience.positionTitle} onChange={handleChange} /><br />
          <label>Main Responsibilities: </label>
          <input type="text" name="mainResponsibilities" value={practicalExperience.mainResponsibilities} onChange={handleChange} /><br />
          <label>Date From: </label>
          <input type="date" name="dateFrom" value={practicalExperience.dateFrom} onChange={handleChange} /><br />
          <label>Date Until: </label>
          <input type="date" name="dateUntil" value={practicalExperience.dateUntil} onChange={handleChange} /><br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {practicalExperience.companyName}</p>
          <p>Position Title: {practicalExperience.positionTitle}</p>
          <p>Main Responsibilities: {practicalExperience.mainResponsibilities}</p>
          <p>Date From: {practicalExperience.dateFrom}</p>
          <p>Date Until: {practicalExperience.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
