import propTypes from "prop-types";
import { Button, Modal } from "components/index";
import "./congratsModal.scss";
import assets from "assets/index";

const CongratsModal = ({
  visible,
  title,
  message,
  closeHandler,
  showCheckIcon = false,
}) => {
  return (
    <Modal visible={visible} customClass="congrats-modal">
      <div className="congrats-modal__content">
        <img src={assets.CongrateDesign} />
        <h4>{title}</h4>
        <div className="body">
          <p>{message}</p>
          {showCheckIcon && (
            <span className="check">
              <input type="checkbox" />
            </span>
          )}
        </div>
        <div className="action">
          <Button btnText="Go to dashboard" onClick={closeHandler} />
        </div>
      </div>
    </Modal>
  );
};
export default CongratsModal;
CongratsModal.propTypes = {
  visible: propTypes.bool,
  title: propTypes.string,
  message: propTypes.string,
  closeHandler: propTypes.func.isRequired,
  showCheckIcon: propTypes.bool,
};
