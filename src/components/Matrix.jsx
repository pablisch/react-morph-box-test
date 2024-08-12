import {useEffect, useState} from 'react';
import './Matrix.css'; // Import CSS file for styling

const Matrix = () => {
  const [hoveredRow, setHoveredRow] = useState(null)

  const handleMouseEnterRow = (index) => {
    setHoveredRow(index);
  };

  const handleMouseExitRow = () => {
    setHoveredRow(null);
  };

  return (
      <div className="rows-container">
        {[...Array(3).keys()].map((index) => (
            <MatrixRow
                key={`row-${index}`}
                className={`row`}
                rowIndex={index}
                hoveredRow={hoveredRow}
                handleMouseEnterRow={handleMouseEnterRow}
                handleMouseExitRow={handleMouseExitRow}
            />
        ))}
      </div>
  )
}

// eslint-disable-next-line react/prop-types
const MatrixRow = ({rowIndex, hoveredRow, handleMouseEnterRow, handleMouseExitRow}) => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnterCol = (index) => {
    setHoveredColumn(index);
  };

  const handleMouseExitCol = () => {
    setHoveredColumn(null);
  };

  useEffect(() => {

    console.log(`focus - col: ${hoveredColumn}, row: ${hoveredRow}`)
  })

  return (
      <div className={`single-row-container`}
           onMouseEnter={() => handleMouseEnterRow(rowIndex)}
           onMouseLeave={handleMouseExitRow}>
      {[...Array(4).keys()].map((index) => (
        <MatrixPanel
          key={index}
          rowIndex={rowIndex}
          colIndex={index}
          hoveredRow={hoveredRow}
          isHovered={hoveredColumn === index}
          hoveredColumn={hoveredColumn}
          onMouseEnterCol={handleMouseEnterCol}
          onMouseExitCol={handleMouseExitCol}
        />
      ))}
    </div>
  );
};



// eslint-disable-next-line react/prop-types
const MatrixPanel = ({ rowIndex, colIndex, hoveredRow, isHovered, onMouseEnterCol, onMouseExitCol, hoveredColumn }) => {
  return (
    <div
      className={`panel ${isHovered ? 'active' : hoveredColumn === null ? 'passive' : ''} ${hoveredRow === rowIndex ? "active-row" : hoveredRow === null ?  "passive-row" : ""}`}
      onMouseEnter={() => onMouseEnterCol(colIndex)}
      onMouseLeave={onMouseExitCol}
    >
      <p className="text">{`Column ${colIndex}`}</p>
      <p className="text">{`Row ${rowIndex}`}</p>

    </div>
  );
};

export default Matrix