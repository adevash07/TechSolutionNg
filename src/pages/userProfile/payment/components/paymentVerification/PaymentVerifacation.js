import propTypes from "prop-types";
import { Button, Input, Note, ProgressIndicator } from "components/index";
import { PageHeader } from "../../../components";
import "./paymentVerification.scss";

const PaymentVerification = ({ data = {}, changeHandler, onNext, onBack }) => {
  return (
    <div className="payment-verification">
      <section>
        <div className="page-heading">
          <PageHeader title="Verify payment" rightText="Skip for later" />
        </div>

        <form onSubmit={onNext}>
          <section className="section-row">
            <div className="section-content">
              <div>
                <h4>Card details</h4>
                <ProgressIndicator components={4} activeComponent={3} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <Input
                    inputId="cardNumber"
                    inputName="cardNumber"
                    onChange={(e) =>
                      changeHandler(e.target.name, e.target.value)
                    }
                    value={data.title || ""}
                    labelText="Card number"
                    inputPlaceholder="2xx xxx xxx xx"
                    inputType="text"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
                <div className="form-group">
                  <Input
                    inputId="cardName"
                    inputName="cardName"
                    onChange={(e) =>
                      changeHandler(e.target.name, e.target.value)
                    }
                    value={data.title || ""}
                    labelText="Card name"
                    inputPlaceholder="John Doe"
                    inputType="text"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Input
                    inputId="expiryDate"
                    inputName="expiryDate"
                    onChange={(e) =>
                      changeHandler(e.target.name, e.target.value)
                    }
                    value={data.title || ""}
                    labelText="Expiry date"
                    inputPlaceholder="mm/yy"
                    inputType="text"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
                <div className="form-group">
                  <Input
                    inputId="cvv"
                    inputName="cvv"
                    onChange={(e) =>
                      changeHandler(e.target.name, e.target.value)
                    }
                    value={data.title || ""}
                    labelText="cvv"
                    inputPlaceholder="Enter 3 digit number"
                    inputType="text"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
              </div>
            </div>
            <div className="note-col">
              <Note title="Add card">
                <div className="card-note">
                  <p>
                    Please be aware that all major cards are accepted on iT
                    Solutions
                  </p>
                </div>
              </Note>
            </div>
          </section>
          <section className="section-row">
            <div className="table">
              <h4>Verify pay</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Deposit amount</td>
                    <td>N1000.000</td>
                  </tr>
                  <tr>
                    <td>Processing fee</td>
                    <td>N500.000</td>
                  </tr>
                  <tr className="total">
                    <td>Total</td>
                    <td>N1500.000</td>
                  </tr>
                </tbody>
              </table>
              <div className="action-btns">
                <Button
                  btnText="Pay N1500"
                  btnType="button"
                  btnClass="medium"
                />
              </div>
            </div>
            <div className="note-col">
              <Note title="Verify pay">
                <div className="verify-note">
                  <p>
                    Please beaware that when you click pay, this payment plan
                    will also be used all future transactions
                  </p>
                </div>
              </Note>
            </div>
          </section>
          <div className="actions">
            
            <Button
              btnText="Back"
              btnType="button"
              btnClass="grey"
              onClick={onBack}
            />
            <Button
              btnText="Next"
              btnType="submit"
              btnClass="medium"
              onClick={onNext}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default PaymentVerification;
PaymentVerification.propTypes = {
  data: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
