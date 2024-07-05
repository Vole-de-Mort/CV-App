import { useState } from 'react';

export default function EducationForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleInputData = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <>
      <div className='schoolName'>
        <label htmlFor='schoolName'>Full name</label>
        <input
          type='text'
          placeholder='ESSTHS ...'
          id='schoolName'
          value={formData.schoolName}
          onChange={handleInputData}
        />
      </div>
      <div className='degree'>
        <label htmlFor='degree'>Degree/Field of Study</label>
        <input
          type='text'
          placeholder='CS'
          id='degree'
          value={formData.degree}
          onChange={handleInputData}
        />
      </div>
      <div className='startDate'>
        <label htmlFor='startDate'>Start date</label>
        <input
          type='date'
          id='startDate'
          value={formData.startDate}
          onChange={handleInputData}
        />
      </div>
      <div className='endDate'>
        <label htmlFor='endDate'>End date</label>
        <input
          type='date'
          id='endDate'
          value={formData.endDate}
          onChange={handleInputData}
        />
      </div>
      <div className='buttons'>
        <button type='button' onClick={handleSave}>
          Save
        </button>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </>
  );
}
