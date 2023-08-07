import styled from 'styled-components'
const TotalScore = ({Score}) => {
  return (
    <ScoreContainer>
        <h1>{Score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const  ScoreContainer=styled.div`
max-width: 200px;
/* background-color: red; */
text-align: center;
    h1{
        font-size: 100px;
       
    }
    p{
        font-size:24px;
        font-weight: 500px;
    }
`