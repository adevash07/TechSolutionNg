import React from "react";
import { Button } from "components";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./sign.scss";

const Sign = () => {
  return (
    <section className="landingSign">
      <div className="landingSign__container">
        <h4 className="landingSign__header">
          Sign up to start posting projects now
        </h4>
        <p className="landingSign__paragraph">
          We can&apos;t wait to see you on IT Solutions
        </p>
        <div className="landingSign__btn">
          <Button
            animateIcon
            btnText="Get Started"
            link="/signup"
            btnIcon={<IoArrowForwardSharp />}
          />
        </div>
      </div>
    </section>
  );
};

export default Sign;
