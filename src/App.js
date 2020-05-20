import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import User from './Components/User'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUser = []
const initialDisabled = true

function App() {
  
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [user, setUser] = useState(initialUser)



  const postUser = newUser => {
    axios.post( 'https://reqres.in/api/users', newUser)
      .then(res => {
        setUser([res.data, ...user])
      })
      .catch(err => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }

    postUser(newUser)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target

    setFormValues({ ...formValues, [ name ]: checked })

  }

  useEffect(() => {
        formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <Form 
          values={ formValues }
          onInputChange={ onInputChange }
          onSubmit={ onSubmit }
          onCheckboxChange={ onCheckboxChange }
          disabled={ disabled }
          errors={ formErrors }
        />
        {
          user.map(user => {
            return (
              <User 
                details={user}
              />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
