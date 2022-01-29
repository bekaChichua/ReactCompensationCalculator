import styled from 'styled-components';

const Button = () => {
  return (
  <StyledButton type="submit" value="Calculate"/>
  );
};

export default Button;

const StyledButton = styled.input`
cursor: pointer;
border: none;
width: 169px;
height: 60px;
background: linear-gradient(90deg, #911812 0%, #E1261C 100%);
border-radius: 30px;
padding: 20px 40px;
margin: 20px 0;
font-family: Sora;
font-weight: bold;
line-height: 20px;
color: #FFFFFF;
text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
:active{
  transform: scale(1.05);
  transition: 0.1s;
}
`