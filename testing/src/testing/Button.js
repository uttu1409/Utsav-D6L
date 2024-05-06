import React from 'react'

const Button = ({label}) => {
  return (
    <div>
       <button onClick={onClick} data-testid="button">
            {label}
        </button>
    </div>
  )
}

export default Button
