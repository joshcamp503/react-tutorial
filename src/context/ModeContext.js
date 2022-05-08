import { createContext, useReducer } from "react"



export const ModeContext = createContext()

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    case 'UPDATE_ARRAY':
      console.log(action.payload)
      return { ...state, countArray: action.payload }
    case 'DECREMENT_ARRAY':
      return { ...state, countArray: action.payload }
    default: 
      return state
  }
}

export function ModeProvider({ children }) {

  const initialState = { 
    mode: 'light', 
    countArray: []
  }

  const [state, dispatch] = useReducer(modeReducer, initialState)

  const setMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode})
  }

  const updateArray = (countArray, number) => {
    countArray.push(number)
    dispatch({ type: 'UPDATE_ARRAY', payload: countArray })
  }

  const decrementArray = (countArray, number) => {
    countArray.pop(number)
    dispatch({ type: 'DECREMENT_ARRAY', payload: countArray })
  }

  return (
    <ModeContext.Provider value={{...state, setMode, updateArray, decrementArray }}>
      {children}
    </ModeContext.Provider>
  )
}

