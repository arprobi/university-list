import React from 'react'
import { Link } from 'react-router-dom'

interface IErrorProps {
  code: number
}

const Error: React.FC<IErrorProps> = ({ code }) => {
  return (
    <div className="mx-auto px-[94px] max-w-2xl py-[64px] text-center">
      <img src={`/${code}.svg`} alt={`Error ${code}`} />
      <p className="font-semibold text-xl">{ code === 404 ? 'Page not found' : 'Oops, we are under maintenance' }</p>
      <Link to="/"
        className="inline-block bg-default py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 mt-6"
      >
        Back Home
      </Link>
    </div>
  )
}

export default Error
