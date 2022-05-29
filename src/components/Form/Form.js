import { Fragment, useRef } from "react";
import classes from "./Form.module.css";
import Container from "../UI/Container";
import Row from "../UI/Row";
import Col from "../UI/Col";
import { sendCalculatorAction } from "../../store/calculation-store/calculation-action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Form = () => {
  // get dispatch
  const dispatch = useDispatch();
  // useSelector for get Store State and auto update this component
  const calculator = useSelector((state) => {
    return state.calculator;
  });

  // Get ref from inputs
  const number1Ref = useRef(null);
  const number2Ref = useRef(null);

  // Event handler and dispatch calls inside
  const onPlusHandler = (event) => {
    event.preventDefault();
    const num1Value = number1Ref.current.value;
    const num2Value = number2Ref.current.value;
    dispatch(sendCalculatorAction(num1Value, num2Value, 1));
  };

  // Event handler and dispatch calls inside
  const onSubtractHandler = (event) => {
    event.preventDefault();
    const num1Value = number1Ref.current.value;
    const num2Value = number2Ref.current.value;
    dispatch(sendCalculatorAction(num1Value, num2Value, 2));
  };

  // Event handler and dispatch calls inside
  const onMultiplyHandler = (event) => {
    event.preventDefault();
    event.preventDefault();
    const num1Value = number1Ref.current.value;
    const num2Value = number2Ref.current.value;
    dispatch(sendCalculatorAction(num1Value, num2Value, 3));
  };

  // Event handler and dispatch calls inside
  const onDivideHandler = (event) => {
    event.preventDefault();
    event.preventDefault();
    const num1Value = number1Ref.current.value;
    const num2Value = number2Ref.current.value;
    dispatch(sendCalculatorAction(num1Value, num2Value, 4));
  };

  // render
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className="text-success text-center mt-3">
              Calculation Result
            </h2>
            <p className="text-center mt-1 fs-1 text-primary">
              {calculator.result}
            </p>
          </div>
          <form className="p-3">
            <div className="mb-3">
              <label htmlFor="number1" className="form-label">
                Number 1
              </label>
              <input
                type="text"
                className="form-control"
                id="number1"
                ref={number1Ref}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="number2" className="form-label">
                Number 2
              </label>
              <input
                type="text"
                className="form-control"
                id="number2"
                ref={number2Ref}
              ></input>
            </div>

            <div>
              <button className="btn btn-primary me-3" onClick={onPlusHandler}>
                Plus
              </button>
              <button
                className="btn btn-primary me-3"
                onClick={onSubtractHandler}
              >
                Subtract
              </button>
              <button
                className="btn btn-primary me-3"
                onClick={onMultiplyHandler}
              >
                Multiply
              </button>
              <button
                className="btn btn-primary me-3"
                onClick={onDivideHandler}
              >
                Divide
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
