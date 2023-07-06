import React from 'react'
import MemoryGrid from '../../components/MemoryGrid'
import SinglePlyerFooter from './layout/SinglePlyerFooter'

const SoloRound: React.FC = () => {
  return (
    <>
      <MemoryGrid gridSize={16} theme="numbers" multiMode />
      <SinglePlyerFooter time={'22:00'} moves={23} />
    </>
  )
}

export default SoloRound
