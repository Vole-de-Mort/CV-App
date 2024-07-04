import { useState } from 'react';

import '../styles/GenereBox.css';
import im1 from '../assets/arrow.png';

// lazem ki tenzel 3al arrow tatla3 ta7tou formulaire faha inputs
// ou cancel and save buttons

export default function GenreBox(props) {
  const [showForm, setShowForm] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handelArrowClick = () => {
    setShowForm(!showForm);
  };

  const handelBlockClick = () => {
    const newShowBlock = !showBlock;
    setShowBlock(newShowBlock);

    if (newShowBlock) {
      setTimeout(() => setIsVisible(true), 0); // delay before making it visible again
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    handelArrowClick();
    toggleHidden();
  };
  const handleCloseClick = () => {
    toggleHidden();
    setShowForm(false);
  };
  let formContent = null;
  if (showForm) {
    formContent = (
      <>
        {props.formContent}
        <div className='buttons'>
          <button type='submit'>Save</button>
          <button type='button' onClick={handleCloseClick}>
            Cancel
          </button>
        </div>
      </>
    );
  }

  let blockContent = null;

  if (showBlock) {
    blockContent = (
      <>
        <div
          onClick={handleClick}
          className={`add ${isHidden ? 'hidden' : ''}`}
        >
          Add {props.text}
        </div>
        <div className='form'>{formContent}</div>
      </>
    );
  }

  // this page should display an add  block

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
            className={`arrow ${showBlock ? 'rotate' : ''}`}
            onClick={handelBlockClick}
          />
        </div>
      </div>

      <div className={`blockContent ${isVisible ? 'visible' : ''}`}>
        {blockContent}
      </div>
    </div>
  );
}
