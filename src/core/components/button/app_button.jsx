import React from 'react'

const AppButton = ( { children, ...props }) => {
  return (

    <button type="button" { ...props}> { children  }</button>

  )
}

export default AppButton