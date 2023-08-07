import styled from 'styled-components'

export const Button=styled.button`
color: white;
background-color: black;
border-radius: 5px;
padding: 10px 18px;
min-width:220px;
border: none;
font-size: 20px;
border:1px solid black;
cursor: pointer;
transition: 0.3s background ease-in;
&:hover{
    color: black;
    background-color: white;
    transition: 0.3s background ease-in-out ;
}
`;