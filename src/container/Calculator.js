import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';
import Button from '../component/Button';
import CheckBox from '../component/CheckBox';
import Input from '../component/Input';
import CustomStateManager from '../utils/customHook';


const Calculator = () => {
  const [state, dispatch, ACTIONS] = CustomStateManager();

  console.log(state);

  const onSubmit = event =>{
    event.preventDefault()
    if(state.days < 0 || state.income < 0){
      alert("Negative numbers are not permitted!");
    }else if(3<state.days && state.days<=8){
      console.log(3<state.days<=8);
      dispatch({type : ACTIONS.EMPLOYER_COMPENSATES});
    }else if((state.days>9 && state.days<=182) || (state.checked===true && state.days<=240)){
      console.log("got here!");
      dispatch({type : ACTIONS.INSURANCE_COMPENSATES})
    }else if(state.days>182){
      dispatch({type : ACTIONS.MAX_COMPENSATION})
    }else{
      dispatch({type : ACTIONS.NO_COMPENSATION})
    }
  }

  return (
  <Container onSubmit={onSubmit}>
      <Title>Compensation Calculator</Title>
      <Input 
            label={"Average income"} 
            inputType={"€"} input = {state.income} 
            name="income" 
            dispatch={dispatch} 
            actions = {ACTIONS.HANDLE_CHANGE}
            />
      <Input 
            label={"Days on sick-leave"} 
            inputType={"days"} 
            input={state.days} 
            name="days" 
            dispatch={dispatch} 
            actions = {ACTIONS.HANDLE_CHANGE}
            />
      <CheckBox 
            input={state.checked} 
            name="checked" 
            dispatch={dispatch} 
            actions = {ACTIONS.HANDLE_CHANGE}
            />
      <Button/>
      <Line></Line>
      <FlexDiv>
        <SmallContent>
          <>
            The employer compensates <Title fontSize = "14px" lineHight="15px">{state.employerCompensationDays} days</Title>
          </>
          <Title fontSize="18px" lineHight="30px" padding="10px 0 0 0">
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Math.floor(state.employerTotal))}
          </Title>
          <SmallContent color='#7A818E' fontSize='12px'>
            Daily allowance <br/> 
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Math.floor(state.dailyAllowance))}
          </SmallContent>
        </SmallContent> 
        <SmallContent>    
          <>
            Health Insurance compensates <Title fontSize = "14px" lineHight="15px">{state.insuranceCompensationDays} days</Title>
          </>
          <Title fontSize="18px" lineHight="30px" padding="10px 0 0 0">
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Math.floor(state.insuranceTotal))}
          </Title>
          <SmallContent color='#7A818E' fontSize='12px'>Daily allowance <br/> 
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Math.floor(state.dailyAllowance))}
          </SmallContent>
        </SmallContent>      
    </FlexDiv>
    <Line position="135px"></Line>
    <TextContent>Compensation total for {state.days || 0} days (net)</TextContent>
    <Title padding="5px 0 0 0" align="center">
      {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Math.floor(state.total))}
    </Title>
  </Container>
  );
};

export default Calculator;

const TextContent = styled.p`
    padding-top : 100px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`

const Line = styled.div`
  width: 320px;
  height: 1px;
  right: 0px;
  bottom: ${props=>props.position || "293px"};
  position: absolute;
  background-color: #e9edf4;
`

const SmallContent = styled.div`
text-align: center;
max-width: 130px;
height: 45px;
font-family: Sora;
font-weight: normal;
font-size: ${props=>props.fontSize || "14px"};
line-height: 15px;
color: ${props => props.color || "#111317"};
`

const FlexDiv = styled.div`
padding-top: 20px;
display: flex;
`

const Title = styled.p`
font-weight: ${props=>props.fontWeight || "bold"};
font-size: ${props => props.fontSize || "24px"};
line-height: ${props => props.lineHight || "25px"};
text-align: ${props=>props.align};
padding: ${props=> props.padding};
letter-spacing: -0.02em;
`

const Container = styled.form`
position: relative;
grid-area: calculator;
justify-self: end;
max-width: 320px;
height: 755px;
background: #ffffff;
border-radius: 30px;
padding: 80px 20px;
@media (max-width: 800px) {
  justify-self: center;
}
`