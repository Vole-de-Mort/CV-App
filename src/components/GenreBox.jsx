import { useState } from 'react';

import '../styles/GenereBox.css';
import im1 from '../assets/arrow.png';

// lazem ki tenzel 3al arrow tatla3 ta7tou formulaire faha inputs
// ou cancel and save buttons

export default function GenreBox(props) {
  const [showForm, setShowForm] = useState(false);

  const handelArrowClick = () => {
    // lena lzem el formulaire marra tetna7a ou marra tatla3
    setShowForm(!showForm);
  };

  let formContent = null;
  if (showForm) {
    console.log(showForm);

    formContent = (
      <>
        {props.formContent}
        <div className='buttons'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>
      </>
    );
    //reder the form
  }
  return (
    <div className='box' key={props.index}>
      <div className='subBox'>
        <div className='show-box'>
          <img src={props.srcIcone} alt={props.info} />
          <p>{props.text}</p>
        </div>
        <div className='showToggel'>
          <img
            src={im1}
            alt='toggelling arrow'
            className='arrow'
            onClick={handelArrowClick}
          />
        </div>
      </div>
      <div className='form'>{formContent}</div>
    </div>
  );
}
