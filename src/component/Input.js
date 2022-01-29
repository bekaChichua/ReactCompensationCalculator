import styled from 'styled-components';

const Input = ({label, inputType, input, name, dispatch, actions}) => {

 
  
  return <Container>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput type="number" value={input} name={name} onChange={(event)=>dispatch({type : actions, payload:{event}})}/>
    <StyledLabel2>{inputType}</StyledLabel2>
  </Container>;
};

export default Input;

export const StyledLabel = styled.label`
padding-bottom: 5px;
font-family: Sora;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #111317;
`
const StyledLabel2 = styled.label`
position: absolute;
font-weight: 700;
right: 15px;
top: 50px
`

const StyledInput = styled.input`
position: relative;
background: #ffffff;
box-shadow: 0px 2px 4px #d2d9e8;
border-style: solid;
border-color: #d3dae8;
border-radius: 4px;
width: 280px;
height: 50px;
`

const Container = styled.div`
    position: relative;
    padding: 10px 0;
`