import { useState } from 'react';
import './Grid.css'; // Import CSS file for styling

// eslint-disable-next-line react/prop-types
const GridSection = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`grid-section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Content of each grid section */}
    </div>
  );
};

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
