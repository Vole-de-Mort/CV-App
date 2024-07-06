import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function EducationForm(props) {
  //const [formData, setFormData] = useState(props.sharedData.educationData);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    id: '',
  });
  const handleInputData = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData.educationData,
      ...formData,
      [id]: value,
      id: uuidv4(),
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
    // Update the initialData structure in the parent component (App.js)
    props.onSave((prevSharedData) => ({
      ...prevSharedData,
      educationData: [...prevSharedData.educationData, formData],
    }));
  };

  return (
    <>
      <div className='schoolName'>
        <label htmlFor='schoolName'>Full name</label>
        <input
          type='text'
          placeholder='ESSTHS ...'
          id='schoolName'
          //value={formData.schoolName}
          onChange={handleInputData}
        />
        {errors.schoolName && (
          <span className='error'>{errors.schoolName}</span>
        )}
      </div>
      <div className='degree'>
        <label htmlFor='degree'>Degree/Field of Study</label>
        <input
          type='text'
          placeholder='CS'
          id='degree'
          //value={formData.degree}
          onChange={handleInputData}
        />
        {errors.degree && <span className='error'>{errors.degree}</span>}
      </div>
      <div className='startDate'>
        <label htmlFor='startDate'>Start date</label>
        <input
          type='date'
          id='startDate'
          //value={formData.startDate}
          onChange={handleInputData}
        />
        {errors.startDate && <span className='error'>{errors.startDate}</span>}
      </div>
      <div className='endDate'>
        <label htmlFor='endDate'>End date</label>
        <input
          type='date'
          id='endDate'
          //value={formData.endDate}
          onChange={handleInputData}
        />
        {errors.endDate && <span className='error'>{errors.endDate}</span>}
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
