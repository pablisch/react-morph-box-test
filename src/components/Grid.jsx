import { useState } from 'react';
import './Grid.css'; // Import CSS file for styling

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
          index={index}
          hoveredIndex={hoveredIndex}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const GridSection = ({ index, hoveredIndex, onMouseEnter, onMouseLeave }) => {
  const isHovered = hoveredIndex === index;

  const getScale = () => {
    if (isHovered) return 2; // If hovered, expand
    if (hoveredIndex !== null) return 0.5; // If another section is hovered, shrink
    return 1; // Default scale
  };

  return (
    <div
      className="grid-section"
      style={{ transform: `scale(${getScale()})` }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {/* Content of each grid section */}
    </div>
  );
};

export default Grid;
