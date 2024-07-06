import { useState } from 'react';
import '../styles/PersonalDetailsForm.css';

export default function PersonalDetailsForm(props) {
  const [formData, setFormData] = useState(props.sharedData.personalData[0]);
  const handleInputData = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData.personalData,
      ...formData,
      [id]: value,
    }));
  };
  const handleSave = () => {
    // Update the initialData structure in the parent component (App.js)
    props.onSave((prevSharedData) => ({
      ...prevSharedData,
      personalData: [ formData],
    }));
  };

  console.log(props.sharedData);
  console.log(formData);

  return (
    <>
      <div className='fullName'>
        <label htmlFor='name'>Full name</label>
        <input
          type='text'
          placeholder='Noah Smith'
          id='name'
          //value={formData.name}
          onChange={handleInputData}
        />
      </div>
      <div className='email'>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          placeholder='qwert@gmail.fr'
          id='email'
          //value={formData.email}
          onChange={handleInputData}
        />
      </div>
      <div className='phoneNumber'>
        <label htmlFor='phoneNumber'>Phone number</label>
        <input
          type='text'
          placeholder='33 444 555'
          id='phoneNumber'
          //value={formData.phoneNumber}
          onChange={handleInputData}
        />
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
