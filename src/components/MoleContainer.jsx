import React, { useState } from "react"
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";






function MoleContainer() {
  const [displayMole, setDisplayMole] = useState(false);
  const [score, setScore] = useState(false)

  const handleClick = () =>{
    if (displayMole) {
      setScore(score + 1);
      setDisplayMole(false);

    }
  };

  const moleComponent = 
<div className="mole-container">
  displayMole ? (
      <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} />
    ) : (
      <EmptySlot />
    );
</div>


  return (
    <div>
    
      {moleComponent}


      <p>Score: {score}</p>
    </div>
  );

}
export default MoleContainer