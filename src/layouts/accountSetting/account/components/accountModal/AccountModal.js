import propTypes from "prop-types";
import { Button, Modal } from "components/index";
import "./accountModal.scss";

const AccountModal = ({
  visible,
  title,
  message,
  closeHandler,
  showCheckIcon = false,
}) => {
  return (
    <Modal visible={visible} customClass='acc-modal'>
      <div className='accModal__body'>
        <span onClick={closeHandler}>x</span>
        <h4>{title}</h4>
        <div className='body'>
          <p>{message}</p>
          {showCheckIcon && (
            <span className='check'>
              <input type='checkbox' />
            </span>
          )}
        </div>
        <Button btnText='Close' onClick={closeHandler} />
      </div>
    </Modal>
  );
};
export default AccountModal;
AccountModal.propTypes = {
  visible: propTypes.bool,
  title: propTypes.string,
  message: propTypes.string,
  closeHandler: propTypes.func.isRequired,
  showCheckIcon: propTypes.bool,
};
