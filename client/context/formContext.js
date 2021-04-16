import { createContext } from 'react'

export const FormContext = createContext()

export const FromProvider = () => {
  return (
    <FormContext.Provider>
      
    </FormContext.Provider>
  )
}