import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  ID: null
})

function AuthProvider({ children }) {
  const [ID, setID] = useState("");
  const [SelectedItem, setSelectedItem] = useState("");
  const [QuantitySelected, setSelectedQuantity] = useState("");

  return (
    <AuthContext.Provider value={{ ID, setID, SelectedItem, setSelectedItem, QuantitySelected, setSelectedQuantity}}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider