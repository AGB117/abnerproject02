import { Fragment } from "react";
import classes from "./ContactUsForm.module.css";
import Card from "../ui/Card";

function ContactUsForm(props) {
  return (
    <Fragment>
      <div className={classes.contactUsContainer}>
        <div className={classes.formContainer}>
          <Card>
            <form className={classes.formSpacing}>
              <h1>Contact us</h1>
              <div className={classes.field}>
                <label htmlFor="name">Name:</label>
                <div>
                  <input id="name" type="text" />
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
              <div className={classes.submitButton}>
                <button>Submit</button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUsForm;
