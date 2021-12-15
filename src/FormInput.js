import { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props
  console.log({ ...inputProps })

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className='formInput'>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        id={`input-${id}`}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
