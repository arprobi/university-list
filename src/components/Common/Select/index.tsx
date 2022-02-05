import React from 'react'

import { IOption } from './../../../interfaces'

interface SelectProps {
  id?: string
  label?: string
  name: string
  type: string
  value: string | number
  placeholder?: string
  options: IOption[]
  helperText?: string
  isError?: boolean
  wrapperClass?: string
  onChange: (name: string, value: string) => void
}
const Select: React.FC<SelectProps> = (props) => {
  const options = props.options || []

  const handleChangeSelect = (e: React.FormEvent<HTMLSelectElement>) => {
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
        <select
          name={props.name}
          id={props.id || props.name}
          className="shadow-sm focus:ring-default focus:border-default block w-full text-base sm:text-sm rounded-md p-2 border border-gray"
          defaultValue={props.value}
          onChange={handleChangeSelect}
        >
          <option value="">{props.placeholder}</option>
          { options.map((item, i) => (
            <option value={item.id} key={`opt-${props.name}-${i}`}>{item.label}</option>
          )) }
        </select>
      </div>
      { props.helperText && (
        <p className={`mt-2 text-sm ${props.isError ? 'text-danger' : 'text-gray'}`} id="email-description">
          {props.helperText}
        </p>
      )}
    </div>
  )
}

export default Select