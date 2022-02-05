import React, { useEffect, useState } from 'react'

import {
  Input,
  Button
} from '../Common'

import { ISearch, IOption } from '../../interfaces'

interface SearchProps {
  value: ISearch
  handleChange: (name: string, value: string) => void
  handleSubmit: () => void
}
const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className="md:flex md:flex-initial sm:grid align-bottom">
      <Input
        name="name"
        type="text"
        label="University Name"
        placeholder="Search univ name"
        wrapperClass="p-1 md:w-2/5 xl:w-2/5 sm:w-full xs:w-full"
        value={props.value.name}
        onChange={(name, value) => props.handleChange(name, value)}
      />
      <Input
        name="country"
        type="text"
        label="Country"
        placeholder="Search univ country"
        wrapperClass="p-1 md:w-2/5 xl:w-2/5 sm:w-full xs:w-full"
        value={props.value.country || ''}
        onChange={(name, value) => props.handleChange(name, value)}
      />
      <div className="w-1/5 md:relative">
        <div className="p-1 md:absolute inset-x-0 bottom-0">
          <Button variant="primary" text="Search" handleClick={() => props.handleSubmit()}/>
        </div>
      </div>
    </div>
  )
}

export default Search