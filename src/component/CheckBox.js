import styled from 'styled-components';

const CheckBox = ({input, name, dispatch, actions}) => {
  return (
  <>
    <StyledLabel><span className='insideSpan'>I have tubercolosis</span>
        <input type="checkbox" checked={input} name={name} onChange={(event)=>dispatch({type : actions, payload:{event}})}/>
        <Checkmark className="checkmark"></Checkmark>
      </StyledLabel>
  </>
  );
};

export default CheckBox;

const Checkmark = styled.span`
position: absolute;
top: 6px;
left: 0;
height: 20px;
width: 20px;
box-shadow: 0px 2px 4px #d2d9e8;
border-color: #d2d9e8 ;
border-width: 2px;
border-style: solid;
border-radius: 4px ;
background-color: white;
:after {
  content: "";
  position: absolute;
  display: none;
}
`

const StyledLabel = styled.label`
display: inline-block;
position: relative;
.insideSpan{
padding-left:25px;
font-weight: 600;
font-size: 14px;
color: #111317;
}
input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
input:hover ~ .checkmark{
  background-color: #ccc;
}
input:checked ~ .checkmark{
  background-color: white;
}
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  left: 5px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid black;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
`