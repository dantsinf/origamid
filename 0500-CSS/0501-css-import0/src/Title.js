import React from 'react';
import './Title.css';

function Title() {
  return (
    <div>
      <h1 className="title">
        <Title />
      </h1>
    </div>
  );
}

export default Title;
