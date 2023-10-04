import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './Board.css';

const Shape = [
  'Circle', "Square", "Triangle"
]

const Color = [
  'Red', 'Green', "Blue"
]

const Board: React.FC = () => {
  const Grid = Array.from({length: 16}, (_, i) => {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1) - 1
    return {
      shape: Shape[randomNumber],
      color: Color[randomNumber]
    }
  })
  // states...
  useEffect(() => {
    // Initialize the game board with random shapes and colors
  }, []);

  const handleCellClick = (index: number) => {
    // Reveal cell, check for matches, update game state, and handle game completion
  };

  return (
    <div className="board">
      {/* Render each cell in the board */}
      {Grid.map(item => (
        <div className={`board-item item-${item.color} item-${item.shape}` } key={item.color}>
          {item.color}
        </div>
      ))}
    </div>
  );
};

export default Board;

