import React from "react";
import "./invoiceButton.scss";
import propTypes from "prop-types";
function Button({ btnHref, btnColor, btnText, btnType, btnIcon, toggle }) {
  return (
    <>
      {btnHref ? (
        <a href={btnHref}>
          <button className={btnColor ? `btn-${btnColor} btn` : "btn"}>
            {btnText}
          </button>
        </a>
      ) : (
        <button
          type={btnType}
          className={btnColor ? `btn-${btnColor} btn` : "btn"}
        >
          {btnIcon ? (
            <>
              <span className="btn--text">{btnText}</span>
              <span className="btn--icon" onClick={() => toggle()}>
                {btnIcon}
              </span>
            </>
          ) : (
            <span className="btn--text">{btnText}</span>
          )}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  btnHref: propTypes.string,
  btnColor: propTypes.string,
  btnText: propTypes.string,
  btnType: propTypes.string,
  btnIcon: propTypes.any,
  toggle: propTypes.func,
};

export default Button;
