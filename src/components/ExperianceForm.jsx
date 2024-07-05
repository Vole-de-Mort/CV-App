import { useState } from 'react';
export default function ExperianceForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    startDate: '',
    location: '',
    description: '',
    start: '',
    end: '',
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
      <div className='companyName'>
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          placeholder='Electrocontact Tunisie SARL- ECT1'
          id='companyName'
          value={formData.companyName}
          onChange={handleInputData}
        />
      </div>
      <div className='position'>
        <label htmlFor='position'>Position Title</label>
        <input
          type='text'
          placeholder='technicien supérieur ...'
          id='position'
          value={formData.position}
          onChange={handleInputData}
        />
      </div>
      <div className='location'>
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          placeholder='Kaser hlell'
          id='location'
          value={formData.location}
          onChange={handleInputData}
        />
      </div>
      <div className='description'>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          placeholder='desc ...'
          id='description'
          value={formData.description}
          onChange={handleInputData}
        />
      </div>
      <div className='startDate'>
        <label htmlFor='start'>Start date</label>
        <input
          type='date'
          id='start'
          value={formData.start}
          onChange={handleInputData}
        />
      </div>
      <div className='endDate'>
        <label htmlFor='end'>End date</label>
        <input
          type='date'
          id='end'
          value={formData.end}
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
