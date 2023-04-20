import { Fragment } from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <Fragment>
      <section
        id="hero"
        className={`${classes.hero} ${classes.grid} ${classes.grid2cols}`}
      >
        <div>
          <h1>The best burgers in the city of Orlando!</h1>

          <p>Our burgers are made with 100% angus beef, never frozen!!</p>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.heroImg}
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          ></img>
        </div>
      </section>

      <section
        id="testimonials"
        className={`${classes.testimonialsSection} ${classes.grid} ${classes.grid2cols}`}
      >
        <div className={classes.leftcolumn}>
          <span className={classes.testimonialsSubheading}>Testimonials</span>
          <h1 className={classes.testimonialsHeading}>
            See what our costumers are saying!
          </h1>
          <div className={classes.testimonials}>
            <figure className={classes.testimonial}>
              <img
                className={classes.testimonialsSectionImg}
                src="/ColorLogoNoBackground.png"
              />
              <blockquote className={classes.testimonialText}>
                Two patty cheeseburger with ketchup, mayo, lettuce, pickles, and
                jalapeños! I love the choice of toppings. And of course the
                fries were delicious!
              </blockquote>
              <p className={classes.testimonialName}>&mdash; Bill Johnson</p>
            </figure>
            <figure className={classes.testimonial}>
              <img
                className={classes.testimonialsSectionImg}
                src="/ColorLogoNoBackground.png"
              />
              <blockquote className={classes.testimonialText}>
                Two patty cheeseburger with ketchup, mayo, lettuce, pickles, and
                jalapeños! I love the choice of toppings. And of course the
                fries were delicious!
              </blockquote>
              <p className={classes.testimonialName}>&mdash; Bill Johnson</p>
            </figure>
            <figure className={classes.testimonial}>
              <img
                className={classes.testimonialsSectionImg}
                src="/ColorLogoNoBackground.png"
              />
              <blockquote className={classes.testimonialText}>
                Two patty cheeseburger with ketchup, mayo, lettuce, pickles, and
                jalapeños! I love the choice of toppings. And of course the
                fries were delicious!
              </blockquote>
              <p className={classes.testimonialName}>&mdash; Bill Johnson</p>
            </figure>
            <figure className={classes.testimonial}>
              <img
                className={classes.testimonialsSectionImg}
                src="/ColorLogoNoBackground.png"
              />
              <blockquote className={classes.testimonialText}>
                Two patty cheeseburger with ketchup, mayo, lettuce, pickles, and
                jalapeños! I love the choice of toppings. And of course the
                fries were delicious!
              </blockquote>
              <p className={classes.testimonialName}>&mdash; Bill Johnson</p>
            </figure>
          </div>
        </div>
        <div className={classes.gallery}>
          <figure>
            <img src="/grill.jpg" />
          </figure>
          <figure>
            <img src="/grill.jpg" />
          </figure>
          <figure>
            <img src="/grill.jpg" />
          </figure>
          <figure>
            <img src="/grill.jpg" />
          </figure>
          <figure>
            <img src="/grill.jpg" />
          </figure>
          <figure>
            <img src="/grill.jpg" />
          </figure>
        </div>
      </section>
    </Fragment>
  );
}
export default LandingPage;
