import { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = (props) => {


  const [form, setForm] = useState({
    name: "Michael",
  })

  return (
    <FormContext.Provider value={{ form, setForm}}>
      {props.children}
    </FormContext.Provider>
  )
}