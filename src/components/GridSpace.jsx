import {useState} from 'react'
import './GridSpace.css'

const GridSpace = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    console.log('hovering')
    setIsHovered(true)
  }

  const handleHoverEnd = () => {
    console.log('not hovering')
    setIsHovered(false)
  }

  return (
    <div className={`gridspace ${isHovered ? 'active' : ''}`} onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
      o
    </div>
  )
}

export default GridSpace
