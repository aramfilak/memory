import './MenuWrapper.scss';
import React from 'react';
import useStartMenuOptions from '../store/useStartMenuOptions';

interface Props {
  children: React.ReactNode;
}
function MenuWrapper({ children }: Props) {
  const { visibleMenu } = useStartMenuOptions();
  return (
    <div className={` ${visibleMenu ? 'visible' : 'hidden'} menu-wrapper`}>
      <h1 className="logo">memory</h1>
      {children}
    </div>
  );
}

export default MenuWrapper;
