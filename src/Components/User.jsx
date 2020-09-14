import React from 'react'

function User(props) {
    const { details } = props
    console.log(details)
    return (
        <div className='container'>
            <div className='wrapper'>
                <h6>Name: { details.name }</h6>
                <h6>Email: { details.email }</h6>
            </div>
        </div>
    )
}

export default User;