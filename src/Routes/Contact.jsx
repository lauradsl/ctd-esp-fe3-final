import React from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => 
{

  const {tema} = useContext(ContextGlobal)
  
  return (
    <div className = {`App ${tema}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact