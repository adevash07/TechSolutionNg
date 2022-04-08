import propTypes from "prop-types";
import {
  Input,
  PaymentCard,
  ProgressIndicator,
  Button,
} from "components/index";
import { PageHeader } from "../../../components/index";
import { paymentMethods1, paymentMethods2 } from "./paymentMethodsList";
import "./paymentMethods.scss";
const PaymentMethods = ({ data = {}, changeHandler, onNext, onBack }) => {
  const handlePaymentClick = (method) => {
    changeHandler("paymentMethod", method);
    onNext();
  };
  return (
    <div className="payment-methods">
      <PageHeader title="Payment Methods" rightText="Skip for later" />
      <section>
        <div>
          <h4>Choose your currency</h4>
          <ProgressIndicator components={4} activeComponent={1} />
        </div>

        <div className="form-group">
          <small>Your payment currency</small>
          <Input
            dropdown={true}
            inputId="currency"
            selectId="currency"
            inputName="currency"
            selectName="currency"
            onChange={(e) => changeHandler(e.target.name, e.target.value)}
            value={data.currency || ""}
            labelText="Currency"
            inputPlaceholder="Select"
            InputType="select"
            isRequired={false}
            pattern="[a-zA-Z\s]+"
            title="Enter only alphabets"
          />
        </div>
      </section>
      <section>
        <h4>Choose payment platform</h4>
      </section>
      <section className="methods">
        {paymentMethods1.map(({ name, logo }) => (
          <PaymentCard
            label={name}
            logo={logo}
            key={name}
            clickHandler={() => handlePaymentClick(name)}
          />
        ))}
      </section>
      <section className="methods">
        {paymentMethods2.map(({ name, logo }) => (
          <PaymentCard
            label={name}
            logo={logo}
            key={name}
            clickHandler={() => handlePaymentClick(name)}
          />
        ))}
      </section>
      <section>
        <div className="action-btns">
          <Button
            btnText="Back"
            btnType="button"
            btnClass="grey"
            onClick={onBack}
          />
        </div>
      </section>
    </div>
  );
};

export default PaymentMethods;
PaymentMethods.propTypes = {
  data: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func,
  onBack: propTypes.func,
};
