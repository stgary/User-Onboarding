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
                <form onSubmit={ onSubmit }>
                    <label>Name:
                        <input 
                            name='name'
                            type='text'
                            value={ values.name }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Email:
                        <input 
                            name='email'
                            type='text'
                            value={ values.email }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Password:
                        <input 
                            name='password'
                            type='text'
                            value={ values.password }
                            onChange={ onInputChange }
                        />
                    </label>
                    <label>Terms:
                        <input 
                            name='terms'
                            type='checkbox'
                            onChange={ onCheckboxChange }
                            checked={ values.terms } 
                        />
                    </label>
                    <input
                        name='submit'
                        type='button'
                        disabled={disabled}
                    />
                </form>
            </div>
        </div>
    )
}