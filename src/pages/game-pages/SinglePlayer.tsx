import React from 'react'
import MemoryBoard from '../../components/MemoryBoard'

const SinglePlayer = () => {
  return (
    <div>
      <MemoryBoard gridSize={36} theme="numbers" soloMode />
    </div>
  )
}

export default SinglePlayer
