import { Fragment } from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <Fragment>
      <section id="hero" className={classes.heroSection}>
        <div className={classes.heroBackgroundImg}>
          <div className={classes.heroContainer}>
            <h1>The best burgers in the city of Orlando!</h1>
            <p>Our burgers are made with 100% angus beef, never frozen!!</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className={classes.testimonialsGrid}>
        <div className={`${classes.testimonialsSection} ${classes.leftcolumn}`}>
          <span className={classes.testimonialsSubheading}>Testimonials</span>
          <h1 className={classes.testimonialsHeading}>
            See what our customers are saying!
          </h1>
          <div className={classes.testimonials}>
            <figure className={classes.testimonial}>
              <img
                className={classes.testimonialsSectionImg}
                src="/pfp1.webp"
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
                src="/pfp2.webp"
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
                src="/pfp3.webp"
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
                src="/pfp4.webp"
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
          <figure className={classes.galleryImg}>
            <img src="/gallery1.webp" />
          </figure>
          <figure className={classes.galleryImg}>
            <img src="/gallery2.webp" />
          </figure>
          <figure className={classes.galleryImg}>
            <img src="/gallery3.webp" />
          </figure>
          <figure className={classes.galleryImg}>
            <img src="/gallery4.webp" />
          </figure>
          <figure className={classes.galleryImg}>
            <img src="/gallery5.webp" />
          </figure>
          <figure className={classes.galleryImg}>
            <img src="/gallery6.webp" />
          </figure>
        </div>
      </section>
    </Fragment>
  );
}
export default LandingPage;
