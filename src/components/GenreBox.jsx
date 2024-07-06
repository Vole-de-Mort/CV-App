import React, { useState, useEffect } from 'react';
import '../styles/GenereBox.css';
import im1 from '../assets/arrow.png';
import im2 from '../assets/trash.png';
export default function GenreBox(props) {
  const [showForm, setShowForm] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [renderCard, setRenderCard] = useState([]);
  useEffect(() => {
    renderCards(); // Initial render
  }, [props.sharedData, props.info]);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handelArrowClick = () => {
    setShowForm(!showForm);
  };

  const handleTrashClick = (id) => {
    props.deleteItem(props.info, id);
  };

  const renderCards = () => {
    const dataToShow = props.sharedData[props.info];
    if (dataToShow && dataToShow.length > 0) {
      const newRenderCard = dataToShow.map((item) => {
        // const key = uuidv4();
        if (!item.schoolName && !item.name) {
          return (
            <div className='card' key={item.id}>
              <div>{item.companyName}</div>
              <img
                src={im2}
                alt='Company'
                className='trash'
                onClick={() => handleTrashClick(item.id)}
              />
            </div>
          );
        } else if (item.schoolName) {
          return (
            <div className='card' key={item.id}>
              <div>{item.schoolName}</div>
              <img
                src={im2}
                alt='School'
                className='trash'
                onClick={() => {
                  handleTrashClick(item.id);
                }}
              />
            </div>
          );
        } else {
          return null;
        }
      });

      setRenderCard(newRenderCard);
    } else {
      setRenderCard([]); // Clear renderCard if no data
    }
  };

  const handelBlockClick = () => {
    const newShowBlock = !showBlock;
    setShowBlock(newShowBlock);

    if (newShowBlock) {
      setTimeout(() => setIsVisible(true), 0); // delay before making it visible again
      renderCards();
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

      <div className={`blockContent ${isVisible ? 'visible' : 'hidden'}`}>
        {blockContent}
        <div className={`cards ${isVisible ? 'visible' : 'hidden'}`}>
          {renderCard && <>{renderCard}</>}
        </div>
      </div>
    </div>
  );
}
