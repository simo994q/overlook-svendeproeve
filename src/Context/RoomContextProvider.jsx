import React from 'react'
import { useState,createContext } from 'react'

export const RoomContext = createContext()

const RoomContextProvider = ({children}) => {

  const [room, setRoom] = useState()

  return (
    <RoomContext.Provider value={{room, setRoom}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomContextProvider