import { useState, Fragment } from "react";
import classes from "./ContactUsForm.module.css";
import Card from "../ui/Card";
import useValidation from "@/hooks/use-validation";

function ContactUsForm(props) {
  /*state*/
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    /*reset fields*/
    resetNameInput();
    // setEnteredNameTouched(false);
  };

  return (
    <Fragment>
      <div className={classes.contactUsContainer}>
        <div className={classes.formContainer}>
          <div className={classes.formCard}>
            <form
              className={classes.formSpacing}
              onSubmit={formSubmissionHandler}
            >
              <h1>Contact us</h1>
              <div className={classes.field}>
                <label htmlFor="name">First Name:</label>
                <div>
                  <input
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    id="name"
                    type="text"
                    onChange={nameChangeHandler}
                  />
                  {nameInputHasError && (
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
                <button
                  className={classes.submitButton}
                  disabled={!formIsValid}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUsForm;
