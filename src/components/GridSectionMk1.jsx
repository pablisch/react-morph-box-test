// import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

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

GridSection.propTypes = {
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default GridSection;