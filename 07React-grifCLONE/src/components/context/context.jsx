import React from 'react'

const context = createContext()

const ContextProvider = ({ children }) => {
  return <context.provider>
    {children}
  </context.provider>

export default context