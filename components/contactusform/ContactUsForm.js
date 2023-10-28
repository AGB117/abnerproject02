import { Fragment } from "react";
import classes from "./ContactUsForm.module.css";
import useValidation from "@/hooks/use-validation";

function ContactUsForm(props) {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useValidation((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: enteredComments,
    isValid: enteredCommentsIsValid,
    hasError: commentsInputHasError,
    valueChangeHandler: commentsChangeHandler,
    inputBlurHandler: commentsBlurHandler,
    reset: resetCommentsInput,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredCommentsIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPhoneIsValid &&
      enteredCommentsIsValid
    ) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPhoneInput();
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
                {nameInputHasError && (
                  <span className={classes.invalidInput}>
                    First name is blank!
                  </span>
                )}
                <div>
                  <input
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    onChange={nameChangeHandler}
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="lastname">Last Name:</label>
                {lastNameInputHasError && (
                  <span className={classes.invalidInput}>
                    Last name is blank!
                  </span>
                )}
                <div>
                  <input
                    onBlur={lastNameBlurHandler}
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}
                    type="text"
                    id="lastname"
                    name="lastname"
                  />
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="email">email:</label>
                {emailInputHasError && (
                  <span className={classes.invalidInput}>Invalid email!</span>
                )}
                <div>
                  <input
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className={classes.field}>
                <label htmlFor="phone" className={classes.formLabel}>
                  phone:
                </label>
                {phoneInputHasError && (
                  <span className={classes.invalidInput}>
                    Invalid phone number!
                  </span>
                )}
                <div>
                  <input
                    onBlur={phoneBlurHandler}
                    value={enteredPhone}
                    onChange={phoneChangeHandler}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(_ _ _) _ _ _- _ _ _ _"
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              <div className={classes.field}>
                <label htmlFor="comments" className={classes.formLabel}>
                  comments:
                </label>
                {commentsInputHasError && (
                  <span className={classes.invalidInput}>Add a comment!</span>
                )}
                <div className={classes.comments}>
                  <textarea
                    onBlur={commentsBlurHandler}
                    value={enteredComments}
                    onChange={commentsChangeHandler}
                    id="comments"
                    type="text"
                    placeholder="Your Comments"
                    required
                  ></textarea>
                </div>
              </div>
              <div className={classes.submitButtonCenter}>
                <div>
                  <button
                    className={classes.submitButton}
                    disabled={!formIsValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUsForm;
