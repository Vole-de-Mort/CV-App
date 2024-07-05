import { useState } from 'react';

export default function ExperianceForm(props) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    location: '',
    description: '',
    start: '',
    end: '',
  });

  const handleInputData = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const handleSave = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    props.onSave((prevSharedData) => ({
      ...prevSharedData,
      experianceData: [...prevSharedData.experianceData, formData],
    }));
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
        {errors.companyName && <span className='error'>{errors.companyName}</span>}
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
        {errors.position && <span className='error'>{errors.position}</span>}
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
        {errors.location && <span className='error'>{errors.location}</span>}
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
        {errors.description && <span className='error'>{errors.description}</span>}
      </div>
      <div className='startDate'>
        <label htmlFor='start'>Start date</label>
        <input
          type='date'
          id='start'
          value={formData.start}
          onChange={handleInputData}
        />
        {errors.start && <span className='error'>{errors.start}</span>}
      </div>
      <div className='endDate'>
        <label htmlFor='end'>End date</label>
        <input
          type='date'
          id='end'
          value={formData.end}
          onChange={handleInputData}
        />
        {errors.end && <span className='error'>{errors.end}</span>}
      </div>
      <div className='buttons'>
        <button type='button' onClick={handleSave}>
          Save
        </button>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </>
  );
}