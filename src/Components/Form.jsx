import React from 'react'

export default function Form(props) {
    const {
      values,
      onInputChange,
      onSubmit,
      onCheckboxChange,
      disabled,
      errors
    } = props

    return(
        <div className='container'>
            <div className='wrapper'>
              <h2>User Onboarding</h2>              
                <div className='errors'>
                  <div>{ errors.name }</div>
                  <div>{ errors.email }</div>
                  <div>{ errors.password }</div>
                  <div>{ errors.terms }</div>
                </div>
                <form onSubmit={ onSubmit }>
                    <label>Name:&nbsp;
                        <input 
                            name='name'
                            type='text'
                            value={ values.name }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Email:&nbsp;
                        <input 
                            name='email'
                            type='text'
                            value={ values.email }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Password:&nbsp;
                        <input 
                            name='password'
                            type='text'
                            value={ values.password }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Terms:&nbsp;
                        <input 
                            name='terms'
                            type='checkbox'
                            onChange={ onCheckboxChange }
                            checked={ values.terms } 
                        />
                    </label>
                    <button name='submit' disabled={disabled}>Submit</button>
                    
                </form>
            </div>
        </div>
    )
}