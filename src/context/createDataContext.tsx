import { any } from "prop-types";
import React, { useReducer } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  reducer: any,
  actions: { [x: string]: (arg0: React.DispatchWithoutAction) => any },
  initialState: unknown
) => {
  const Context = React.createContext(any);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: any = {};

    // actions === {addBlogPost :(dispatch)=>{return () => {} }}
    for (let key in actions) {
      // key === addBlogPost
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
