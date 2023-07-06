import MemoryGrid from '../../components/MemoryGrid'
import MultiPlayerFooter from './layout/MultiPlayerFooter'

const MultiRound = () => {
  return (
    <>
      <MemoryGrid gridSize={16} theme="numbers" multiMode />
      <MultiPlayerFooter numberOfPlayers={4} />
    </>
  )
}

export default MultiRound
