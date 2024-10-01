// src/components/Education.js
import React, { useState } from 'react';
import './Style/Education.css'



const Education = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>School Name: </label>
          <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange} /><br />
          <label>Title of Study: </label>
          <input type="text" name="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} /><br />
          <label>Date of Study: </label>
          <input type="date" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} /><br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {education.schoolName}</p>
          <p>Title of Study: {education.titleOfStudy}</p>
          <p>Date of Study: {education.dateOfStudy}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
