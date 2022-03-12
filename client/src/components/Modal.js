import React from 'react';

const Modal = ({ children, titleTxt, setOpen}) => {
  return <div className='modal'>
    <div className='container'>
      <h3>{titleTxt}</h3>
      { children }
      <span className='close'
      onClick={() => setOpen(false)}>&#10006;</span>
    </div>
  </div>;
};

export default Modal;
