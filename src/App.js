import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

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

  const getUser = () => {

  }

  const postUser = () => {

  }

  const onSubmit = evt => {

  }

  const onInputChange = evt => {

  }

  const onCheckboxChange = evt => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
