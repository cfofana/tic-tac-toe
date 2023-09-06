import { useState } from 'react';

function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
  
}

export default function Board(){
  return(
    <div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}