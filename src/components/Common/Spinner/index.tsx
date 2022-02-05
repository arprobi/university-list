import React from 'react'

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      <div className="m-auto flex my-6">
        <span className="text-sm font-normal">Loading</span> <div style={{borderTopColor:'transparent'}} className="w-5 h-5 ml-1 border-4 border-blue-600 border-solid rounded-full animate-spin m-auto" />
      </div>
    </div>
  )
}

export default Spinner