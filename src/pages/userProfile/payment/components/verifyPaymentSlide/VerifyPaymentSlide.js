import propTypes from "prop-types";
import { ProgressIndicator, Button } from "components/index";
import { CgArrowLongRight } from "react-icons/cg";
import { SlideComponent, PageHeader } from "pages/userProfile/components/index";
import asset from "assets/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./verifyPaymentSlide.scss";

const VerifyPaymentSlide = ({ onNext, onBack, data }) => {
  const onChange = () => {};
  const onClickItem = () => {};
  const onClickThumb = () => {};
  return (
    <div className="verify-slide">
      <PageHeader title="Verify payment" rightText="Skip for later" />
      <section className="verify-slide__main">
        <div className="heading">
          <h4>
            Here is why you should verify your{" "}
            <span>{data.paymentMethod || "Paystack"}</span> payment
          </h4>
          <ProgressIndicator components={4} activeComponent={2} />
        </div>
        <Carousel
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={100}
        >
          <SlideComponent
            title="Rightful owner"
            description="Verification helps us ensure you are the rightful owner of thr bank account or payment method you may have selected"
            svgUrl={asset.Security}
          />
          <SlideComponent
            title="See excellent offers"
            description="Verification helps us ensure you are the rightful owner of thr bank account or payment method you may have selected"
            svgUrl={asset.Bag}
          />
          <SlideComponent
            title="Fast pay"
            description="Verification helps us ensure you are the rightful owner of thr bank account or payment method you may have selected"
            svgUrl={asset.Card}
          />
        </Carousel>
        <div className="verify-btn-ctn">
          <button className="btn-verify" type="button" onClick={onNext}>
            <small>Go to verification</small>
            <span>
              <CgArrowLongRight />
            </span>
          </button>
        </div>
      </section>
      <div className="action-btns">
        <Button
          btnText="Back"
          btnType="button"
          btnClass="grey"
          onClick={onBack}
        />
      </div>
    </div>
  );
};

export default VerifyPaymentSlide;
VerifyPaymentSlide.propTypes = {
  data: propTypes.object,
  onNext: propTypes.func,
  onBack: propTypes.func,
};
