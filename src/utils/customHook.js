import { useReducer } from "react";
//helper functions start
const onInputChange = (state, event) => {
    const {name, value} = event.target;
      if([name] == "checked"){
        return {...state, [name]:!state.checked}
      }
      return {...state, [name]:value};
}

const onEmployerCompensation = (state) => {
    const netIncome = state.income * 0.8;
    const incomeAfterCompensation = netIncome * 0.7;
    const dailyAllowance = incomeAfterCompensation / 30;
    const compensatedDays = state.days-3;
    const employerTotal = dailyAllowance * compensatedDays;
    return {
        ...state,
        compensatedDays,
        employerCompensationDays : compensatedDays,
        insuranceCompensationDays : 0,
        dailyAllowance,
        employerTotal,
        insuranceTotal: 0,
        total: employerTotal
    }
}

const onInsuranceCompensation = (state) => {
    const netIncome = state.income * 0.8;
    const incomeAfterCompensation = netIncome * 0.7;
    const dailyAllowance = incomeAfterCompensation / 30;
    const compensatedDays = state.days-8;
    const insuranceTotal = dailyAllowance * compensatedDays;
    return {
        ...state,
        compensatedDays,
        insuranceCompensationDays : compensatedDays,
        employerCompensationDays: 5,
        dailyAllowance,
        employerTotal : dailyAllowance * 5,
        insuranceTotal,
        total:insuranceTotal + (dailyAllowance * 5)
    }
}

const onMaxCompensation = (state) => {
    const netIncome = state.income * 0.8;
    const incomeAfterCompensation = netIncome * 0.7;
    const dailyAllowance = incomeAfterCompensation / 30;
    const compensatedDays = state.checked ? 232 : 174;
    const insuranceTotal = dailyAllowance * compensatedDays;
    return {
        ...state,
        compensatedDays,
        insuranceCompensationDays : compensatedDays,
        employerCompensationDays: 5,
        dailyAllowance,
        employerTotal : dailyAllowance * 5,
        insuranceTotal,
        total:insuranceTotal + (dailyAllowance * 5)
    }
}

const onNoCompensation =(state)=> {
    return {
        ...state,
        compensatedDays:0,
        employerCompensationDays:0,
        insuranceCompensationDays:0,
        dailyAllowance:0,
        employerTotal:0,
        insuranceTotal:0,
        total:0
    }
}
//helper functions end

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.HANDLE_CHANGE:
            console.log(ACTIONS.HANDLE_CHANGE);
            return onInputChange(state, action.payload.event);
        case ACTIONS.EMPLOYER_COMPENSATES:
            console.log(ACTIONS.EMPLOYER_COMPENSATES)
            return onEmployerCompensation(state);    
        case ACTIONS.INSURANCE_COMPENSATES:
            console.log(ACTIONS.INSURANCE_COMPENSATES);
            return onInsuranceCompensation(state);
        case ACTIONS.MAX_COMPENSATION:
            console.log(ACTIONS.MAX_COMPENSATION);
            return onMaxCompensation(state);    
        default:
            console.log(ACTIONS.NO_COMPENSATION);
            return onNoCompensation(state);
    }
}

const ACTIONS = {
    HANDLE_CHANGE : "handleChange",
    EMPLOYER_COMPENSATES : "employerCompensates",
    INSURANCE_COMPENSATES : "insuranceCompensates",
    MAX_COMPENSATION : "maxCompensation",
    NO_COMPENSATION: "noCompensation"
}

const CustomStateManager = () =>{
    const [state, dispatch] = useReducer(reducer, {
            income:"",
            days:"",
            checked : false,
            compensatedDays:0,
            employerCompensationDays:0,
            insuranceCompensationDays:0,
            dailyAllowance:0,
            employerTotal:0,
            insuranceTotal:0,
            total:0
    })
    return [state, dispatch, ACTIONS]
}
export default CustomStateManager;