import React , {createContext , useContext,useReducer} from 'react'
// praper layer 
export  const StateContext = createContext();

export  const StateProfider = ({reducer,initalState,children})=> (
    <StateContext.Provider value={useReducer(reducer,initalState)}>
                {children}
</StateContext.Provider>
 ) ;




export const  useStateValue= () => useContext(StateContext);