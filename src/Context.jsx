import React, {useState} from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // getting all the usernames of your webnosite //
  const [prompt, setPrompt] = useState("hi")

  return (
    <Context.Provider
      value={{prompt, setPrompt}}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
