import React, { forwardRef } from 'react'

function inputforwardRef (props,ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(inputforwardRef)
