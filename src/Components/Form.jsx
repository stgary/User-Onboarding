import React from 'react'

export default function Form() {
    return(
        <div className='container'>
            <div className='wrapper'>
                <form>
                    <label>
                        <input 
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>
                        <input 
                            name='email'
                            type='text'
                        />
                    </label>
                    <label>
                        <input 
                            name='password'
                            type='text'
                        />
                    </label>
                    <label>
                        <input 
                            name='terms'
                            type='checkbox'
                        />
                    </label>
                    <input 
                        name='submit'
                        type='button'
                    />
                </form>
            </div>
        </div>
    )
}