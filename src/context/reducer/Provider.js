import React, {createContext, useReducer} from 'react';
import authInitState from '../initialState/authState';
import contactsInitState from '../initialState/contactsState';
import {authReducer} from './authReducer';
import {contactsReducer} from './contactsReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
