import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/GenereBox.css';
import im1 from '../assets/arrow.png';

export default function GenreBox(props) {
  const [showForm, setShowForm] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [renderCard, setRenderCard] = useState([]);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handelArrowClick = () => {
    setShowForm(!showForm);
  };

  const renderCards = () => {
    const dataToShow = props.sharedData[props.info];
    console.log(dataToShow);
    if (dataToShow && dataToShow.length > 0) {
      const newRenderCard = dataToShow.map((item) => {
        if (!item.schoolName && !item.name) {
          return (
            <div key={uuidv4()}>
              <p>{item.companyName}</p>
              <img src={im1} alt='Company' />
            </div>
          );
        } else if (item.schoolName) {
          return (
            <div key={uuidv4()}>
              <p>{item.schoolName}</p>
              <img src={im1} alt='School' />
              {console.log(item.schoolName)}
            </div>
          );
        } else {
          return null;
        }
      });

      setRenderCard(newRenderCard);
      //setRenderCard(prevRenderCard => [...prevRenderCard, ...newRenderCard]);
    } else {
      setRenderCard([]); // Clear renderCard if no data
    }
  };

  const handelBlockClick = () => {
    const newShowBlock = !showBlock;
    setShowBlock(newShowBlock);

    if (newShowBlock) {
      setTimeout(() => setIsVisible(true), 0); // delay before making it visible again
      //setRenderCard([]);
      renderCards();
      console.log('rendercards on arrow click');
      //here we need to call a function to runder data if needed
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
    // we need to update the .cards ----------------------------------------------------------------
    handelBlockClick();   
  };

  let formContent = null;
  if (showForm) {
    formContent = (
      <>
        {React.cloneElement(props.formContent, {
          onSave: handleSaveClick,
          onCancel: handleCloseClick,
        })}
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
        <div className={`cards ${isVisible ? 'visible' : 'hidden'}`}>
          {renderCard && <>{renderCard}</>}
        </div>
      </div>
    </div>
  );
}
