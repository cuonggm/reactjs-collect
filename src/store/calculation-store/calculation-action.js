import { calculatorActions } from "./calculator-slice";

// Code logic before real dispatch to execute reducer to update state
// Export this for calling from Component to create Action creator
export const sendCalculatorAction = (num1, num2, type) => {
  // Need return a function as action
  return async (dispatch) => {
    // Defind a function that hold business logic inside (be often side effect)
    const businessHandler = () => {
      if (type === 1) {
        dispatch(calculatorActions.plus({ number1: num1, number2: num2 }));
      }

      if (type === 2) {
        dispatch(calculatorActions.subtract({ number1: num1, number2: num2 }));
      }

      if (type === 3) {
        dispatch(calculatorActions.multiply({ number1: num1, number2: num2 }));
      }

      if (type === 4) {
        dispatch(calculatorActions.divide({ number1: num1, number2: num2 }));
      }
    };

    // Call above defined function
    businessHandler();
  };
};
