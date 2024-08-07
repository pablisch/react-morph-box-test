import { useState } from 'react';
import './Grid.css'; 
import GridSection from './GridSectionMk1';

const Grid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid-container">
      {[...Array(16).keys()].map((index) => (
        <GridSection
          key={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Grid;

