import React from 'react';

export const ColorPalette = (props) => {
  return (
    <div className='palette-container'>
      <div className='red circle'/>
      <div className='orange circle'/>
      <div className='green circle'/>
      <div className='blue circle'/>
      <style jsx>{`
        .palette-container {
          position: absolute;
          z-index: 5;
          display: flex;
          flex-wrap: nowrap;
          background-color: white;
          width: 100%;
          justify-content: center;
        }
        .red {
          background-color: #AA3939;
        }
        .orange {
         background-color: #AA6C39;
        }
        .green {
          background-color: #2D882D;
        }
        .blue {
          background-color: #226666;
        }
        .circle {
          border-radius: 50%;
          width: 40px
          height: 40px; 
        }
        .circle:before {
          content: '.';
          color: transparent;
        }
      `}</style>
    </div>
  )
}