import '../OkpdStyle.sass';
import React from 'react';

const Modal = ({isOpen, setOpen, children}) => {

  return (
    <div className={isOpen ? "modalGround Open" : "modalGround"} onClick={() => setOpen(false)}>
      <div onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
};

export default Modal;
