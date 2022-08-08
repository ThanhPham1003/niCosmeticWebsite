import React from 'react'

const FormInput = (props) => {
  const {label,errorMessage, onChange, id, ...inputProps} = props;

  return (
    <div className="order__info">
      <div className='order__info__label'>
        <label>{label}</label>
      </div>
      <input className='order__info__input' {...inputProps} onChange={(e)=>onChange(e)}/>
      <span className='order__info__span'>{errorMessage}</span>

    </div>
    
  )
}

export default FormInput
