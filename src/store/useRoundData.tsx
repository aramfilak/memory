import { create } from 'zustand'

interface State {}

interface Actions {}

const useRoundData = create<State & Actions>((set) => ({}))

export default useRoundData
