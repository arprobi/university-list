import React from 'react'

interface InputProps {
  id?: string
  label?: string
  name: string
  type: string
  value: string | number
  placeholder?: string
  helperText?: string
  isError?: boolean
  wrapperClass?: string
  onChange: (name: string, value: string) => void
}
const Input: React.FC<InputProps> = (props) => {
  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    props.onChange(name, value)
  }

  return (
    <div className={props.wrapperClass || ''}>
      { props.label && (
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray">
          { props.label }
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          name={props.name}
          id={props.id || props.name}
          className="shadow-sm focus:ring-default focus:border-default block w-full text-base sm:text-sm rounded-md p-2 border border-gray"
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChangeInput}
        />
      </div>
      { props.helperText && (
        <p className={`mt-2 text-sm ${props.isError ? 'text-danger' : 'text-gray'}`} id="email-description">
          {props.helperText}
        </p>
      )}
    </div>
  )
}

export default Input