import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  ID: null
})

function AuthProvider({ children }) {
  const [ID, setID] = useState("");
<<<<<<< HEAD
  const [SelectedAvailableItem, setSelectedAvailableItem] = useState("");
  const [QuantitySelected, setSelectedQuantity] = useState("");

  return (
    <AuthContext.Provider value={{ ID, setID, SelectedAvailableItem, setSelectedAvailableItem, QuantitySelected, setSelectedQuantity}}>
=======
  const [SelectedItem, setSelectedItem] = useState("");
  const [QuantitySelected, setSelectedQuantity] = useState("");

  return (
    <AuthContext.Provider value={{ ID, setID, SelectedItem, setSelectedItem, QuantitySelected, setSelectedQuantity}}>
>>>>>>> 17902798dd020ad6c45c7b8590e6511ac5eed12f
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider