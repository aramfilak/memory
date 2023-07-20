import './WindowModalWrapper.scss';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function WindowModalWrapper({ children }: Props) {
  return (
    <div className={'modal open'}>
      <div className="modal__box">{children}</div>
    </div>
  );
}

export default WindowModalWrapper;
