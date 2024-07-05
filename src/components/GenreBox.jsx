import React, { useState } from 'react';
import '../styles/GenereBox.css';
import im1 from '../assets/arrow.png';

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

  const handleSaveClick = (formData) => {
    props.setSharedData(formData);
    setShowForm(false);
    toggleHidden();
  };

  let formContent = null;
  if (showForm) {
    formContent = (
      <>
        {React.cloneElement(props.formContent, { onSave: handleSaveClick, onCancel: handleCloseClick })}
      </>
    );
  }

  let blockContent = null;

  if (showBlock) {
    blockContent = (
      <>
        <div onClick={handleClick} className={`add ${isHidden ? 'hidden' : ''}`}>
          Add {props.text}
        </div>
        <div className='form'>{formContent}</div>
      </>
    );
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
