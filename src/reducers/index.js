//----------------------------------------------------------------------
// import React, {useReducer} from 'react';
// import initialState from './initialize';
// import reducer from './app-reducers';
// import actions from '../actions';
// // import storePersist from '../config/store';

// // const persist = storePersist();

// const StoreContext = React.createContext();

// // This is a simple helper function that will take a type
// // (from the constants above) and a payload, which will be the
// // value which needs to be affected in state .It returns
// // a simple object that will be passed to our dispatch function
// export const createAction = (type, payload) => ({
//   type,
//   payload,
// });

// const StoreProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const actionDispatch = (type, payload) =>
//     dispatch(createAction(type, payload));

//   return (
//     <StoreContext.Provider value={{state, dispatch, actionDispatch}}>
//       {/* <PersistGate loading={null} persistor={persist.persistor}> */}
//       {children}
//       {/* </PersistGate> */}
//     </StoreContext.Provider>
//   );
// };

// export {StoreContext, StoreProvider, actions};
//----------------------------------------------------------------------
// import React, {useReducer} from 'react';
// import {initialState, AuthReducer} from '.';

// const AuthStateContext = React.createContext();
// const AuthDispatchContext = React.createContext();

// export function useAuthState() {
//   const context = React.useContext(AuthStateContext);
//   if (context === undefined) {
//     throw new Error('useAuthState must be used within a AuthProvider');
//   }

//   return context;
// }

// export function useAuthDispatch() {
//   const context = React.useContext(AuthDispatchContext);
//   if (context === undefined) {
//     throw new Error('useAuthDispatch must be used within a AuthProvider');
//   }

//   return context;
// }

// export const AuthProvider = ({children}) => {
//   const [user, dispatch] = useReducer(AuthReducer, initialState);

//   return (
//     <AuthStateContext.Provider value={user}>
//       <AuthDispatchContext.Provider value={dispatch}>
//         {children}
//       </AuthDispatchContext.Provider>
//     </AuthStateContext.Provider>
//   );
// };