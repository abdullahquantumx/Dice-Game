import styled from 'styled-components'
import { Button } from '../styled/Button';

const Startgame = ({toggle}) => {
  return (
   <Container>
    <div>
      <img src="/images/dices 1.png" alt="" />
    </div>
    <div className='Content'>
        <h1>
            DICE GAME
        </h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
   </Container>
  )
}

export default Startgame;

const Container=styled.div`
max-width: 1280px;
display: flex;
flex-wrap: wrap;
margin: 150px auto;
align-items: center;
justify-content: center;
/* border: 3px solid black; */
.Content h1{
    font-size: 76px;
    white-space: nowrap;
    display: flex;
    flex-wrap: wrap;  
}
`;


