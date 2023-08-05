import React,{createContext, useContext,useReducer} from "react";

//prepares the data layer
export const StateContext= createContext();

//wrap our app and provide the data layer
export const StateProvider = ({reducer , initialValue, children}) => {
    return (
     <StateContext.Provider value={useReducer(reducer, initialValue)}>
            {children}
        </StateContext.Provider>
    )}
    
    //Pull information from the data layer
    export const useStateValue = () => useContext(StateContext)