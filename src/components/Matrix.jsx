import {useEffect, useState} from 'react';
import './Matrix.css'; // Import CSS file for styling

const Matrix = () => {
  const [focusRow, setFocusRow] = useState(null)

  const handleMouseEnterRow = (index) => {
    console.log(`*** setting row: ${index}`)
    setFocusRow(index);
  };

  const handleMouseExitRow = () => {
    console.log(`*** setting row: null`)
    setFocusRow(null);
  };

  return (
      <div className="rows-container">
        {[...Array(3).keys()].map((index) => (
            <Row
                key={`row-${index}`}
                className={`row`}
                rowIndex={index}
                focusRow={focusRow}
                handleMouseEnterRow={handleMouseEnterRow}
                handleMouseExitRow={handleMouseExitRow}
                // onMouseEnter={() => handleMouseEnterRow(index)}
                // onMouseLeave={handleMouseExitRow}
            />
        ))}
      </div>
  )
}

// eslint-disable-next-line react/prop-types
const Row = ({rowIndex, focusRow, handleMouseEnterRow, handleMouseExitRow}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnterCol = (index) => {
    console.log(`setting col: ${index}`)
    setHoveredIndex(index);
  };

  const handleMouseExitCol = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {

    console.log(`focus - col: ${hoveredIndex}, row: ${focusRow}`)
  })

  return (
      <div className={`single-row-container`}
           onMouseEnter={() => handleMouseEnterRow(rowIndex)}
           onMouseLeave={handleMouseExitRow}>
      {[...Array(4).keys()].map((index) => (
        <Panel
          key={index}
          rowIndex={rowIndex}
          colIndex={index}
          focusRow={focusRow}
          isHovered={hoveredIndex === index}
          hoveredIndex={hoveredIndex}
          onMouseEnterCol={handleMouseEnterCol}
          onMouseExitCol={handleMouseExitCol}
        />
      ))}
    </div>
  );
};



// eslint-disable-next-line react/prop-types
const Panel = ({ rowIndex, colIndex, focusRow, isHovered, onMouseEnterCol, onMouseExitCol, hoveredIndex }) => {
  return (
    <div
      className={`panel ${isHovered ? 'active' : hoveredIndex === null ? 'passive' : ''} ${focusRow === rowIndex ? "active-row" : focusRow === null ?  "passive-row" : ""}`}
      onMouseEnter={() => onMouseEnterCol(colIndex)}
      onMouseLeave={onMouseExitCol}
    >
      <p className="text">{`Column ${colIndex}`}</p>
      <p className="text">{`Row ${rowIndex}`}</p>

    </div>
  );
};

export default Matrix;
