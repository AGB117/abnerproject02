import { Fragment, useEffect } from "react";
import classes from "./ContactUsForm.module.css";
import Card from "../ui/Card";
import { useState, useRef } from "react";

function ContactUsForm(props) {
  /*forms*/
  /*refs*/
  const nameInputRef = useRef();
  /*state*/
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //effect

  useEffect(() => {}, [enteredNameIsValid]);
  /*handlers*/
  const nameInputChangeHandler = (event) => {
    /*onChange prob produces an event in the dom ,you can accese the value of the input in event.target.value*/

    setEnteredName(event.target.value);

    if (enteredName.trim() !== "") {
      setenteredNameIsValid(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //check for empty fields, must be placed at the bregining to cancel consecuent form handler execution
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
      return;
    }

    setenteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    /*reset fields*/
    // nameInputRef.current.value="" dont manipulate the dom with vanilla js
    setEnteredName("");
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    //validation
    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
    }
  };

  /*export both validations into a variable*/
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  return (
    <Fragment>
      <div className={classes.contactUsContainer}>
        <div className={classes.formContainer}>
          <Card>
            <form
              className={classes.formSpacing}
              onSubmit={formSubmissionHandler}
            >
              <h1>Contact us</h1>
              <div className={classes.field}>
                <label htmlFor="name">First Name:</label>
                <div>
                  <input
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                    ref={nameInputRef}
                    id="name"
                    type="text"
                    onChange={nameInputChangeHandler}
                  />
                  {nameInputIsInvalid && (
                    <span className={classes.invalidInput}>Invalid input!</span>
                  )}
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="lastname">Last Name:</label>
                <div>
                  <input id="lastname" />
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="email">email:</label>
                <div>
                  <input id="email" type="email" />
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="phone" className={classes.formLabel}>
                  phone:
                </label>
                <div>
                  <input id="phone" type="phone" />
                </div>
              </div>

              <div className={classes.field}>
                <label htmlFor="comments" className={classes.formLabel}>
                  comments:
                </label>
                <div className={classes.comments}>
                  <input id="comments" type="text" />
                </div>
              </div>
              <div className={classes.submitButtonCenter}>
                <button className={classes.submitButton}>Submit</button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUsForm;
