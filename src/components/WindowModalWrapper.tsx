import './WindowModalWrapper.scss'
import React from 'react'

interface Props {
  close: boolean
  children: React.ReactNode
}

const WindowModalWrapper: React.FC<Props> = ({ close, children }) => {
  return (
    <div className={`modal ${close ? 'close' : 'open'}`}>
      <div className="modal__box">{children}</div>
    </div>
  )
}

export default WindowModalWrapper
