import propTypes from "prop-types";
import { Button, Modal } from "components/index";
import "./underlinedTitleModal.scss";

const UnderlinedTitleModal = ({
  visible,
  title,
  children,
  closeHandler,
  showCheckIcon = false,
  btnText="Close",
  showFooter=true
}) => {
  return (
    <Modal visible={visible} customClass="underlined-modal">
      <div className="underlined-modal--body">
        <span onClick={closeHandler}>x</span>
        <h4>{title}</h4>
        <div className="body">
          {children}
          {showCheckIcon && (
            <span className="check">
              <input type="checkbox" />
            </span>
          )}
        </div>
        {
          showFooter && <Button btnText={btnText} onClick={closeHandler} />
        }
        
      </div>
    </Modal>
  );
};
export default UnderlinedTitleModal;
UnderlinedTitleModal.propTypes = {
  visible: propTypes.bool,
  title: propTypes.string,
  children: propTypes.any,
  closeHandler: propTypes.func.isRequired,
  showCheckIcon: propTypes.bool,
  btnText: propTypes.string,
  showFooter:propTypes.bool
};
