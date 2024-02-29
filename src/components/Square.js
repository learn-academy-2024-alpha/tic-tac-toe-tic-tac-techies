import React from 'react'

const Square = ({ handleGamePlay, index, nullSquare, squares }) => {
  const handleClick = () => {
    handleGamePlay(index)
  }
  return (
    <div className="square" onClick={handleClick}>{nullSquare}</div>
  )
}
export default Square
