import './WindowModalWrapper.scss';
import React from 'react';

interface Props {
    close: boolean;
    children: React.ReactNode;
}

function WindowModalWrapper({ close, children }: Props) {
    return (
        <div className={`modal ${close ? 'close' : 'open'}`}>
            <div className="modal__box">{children}</div>
        </div>
    );
}

export default WindowModalWrapper;
