import React from 'react'

export default function RegistrationInfo (props) {
  return (
    <div>
      <div>
        <a className='button red' onClick={props.createCase}><i className='icon-add' />Register Now</a>
      </div>
    </div>
  )
}
