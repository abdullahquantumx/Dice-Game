import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from'styled-components'
import { useState } from 'react';
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score,setScore]=useState(0)
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState();
  const [showRules,setShowRules]=useState(false)

 const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
    
}
  const roleDice=()=>{
      const randomNumber= generateRandomNumber(1,7);
    
      setCurrentDice((prev)=>randomNumber)
      if (!selectedNumber){
        setError('You have not selected any number')
        return} ;
      setError("")
      if(selectedNumber==randomNumber){
        setScore((prev)=>prev+randomNumber)
      }
      else{
        setScore((prev)=>prev-2)
      }

      setSelectedNumber(undefined)
}
const resetScore=()=>{
  setScore(0)
}



  return (
    <MainContainer >
      <div className="top">
        <TotalScore Score={Score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btn">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide":"Show"} rules</Button>
      </div>
      {showRules &&<Rules/>}
    </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.div`
padding-top: 70px;
.top{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
}
.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0px;
}
`



