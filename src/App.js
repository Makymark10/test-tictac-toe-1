import logo from './logo.svg';
import './App.css';
import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { useState } from 'react'


function Square({value, onClickSquare}) {
    // const [value, setValue] = useState(null);
    // const letterX = 'x';
  
    // const handleClick = () => handleClick(0) {
    //   if (!value) {
    //     setValue(letterX);
    //   }
    // };
  
    return (
      <button
        className={`squares ${value ? 'clicked' : ''}`}
        onClick={onClickSquare}
      >
        {value}
      </button>
    );
  }
function Title() {
    return (
        <h1 className="h1Style">
            Tic-Tac Toe <br />game
        </h1>
    )
}


function Board() {
    const [ xIsNext, setxIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        // const nextSquare = squares.slice();
     if (squares[i]) {
        return;
     }

     const nextSquare = squares.slice()
     if (xIsNext) {
        nextSquare[i] = "X"
     } else {
        nextSquare[i] = "O"
     }
        setxIsNext(!xIsNext);
        setSquares(nextSquare);
    }
 return (
    <>
    <div className='title'>
        <Title />
    </div>
    
        <div className="board-row">
            <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
            <Square value={squares[1]} onClickSquare={() => handleClick(1)}/>
            <Square value={squares[2]} onClickSquare={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onClickSquare={() => handleClick(3)}/>
            <Square value={squares[4]} onClickSquare={() => handleClick(4)}/>
            <Square value={squares[5]} onClickSquare={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onClickSquare={() => handleClick(6)}/>
            <Square value={squares[7]} onClickSquare={() => handleClick(7)}/>
            <Square value={squares[8]} onClickSquare={() => handleClick(8)}/>
        </div>
    </>
 )
}

export default Board 
// export default TextwtBtn
