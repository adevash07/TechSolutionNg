import { IconWrapper } from "components/index";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import propTypes from "prop-types";
import "./infoContainer.scss";

const InfoContiner = ({
  title,
  children,
  showDelete = true,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div className="info-ctn">
      <small>{title}</small>
      <section className="info-ctn__main">
        <div className="content-main">{children}</div>
        <div className='icons'>
          <IconWrapper handleClick={editHandler} IconName={BsPencil} />
          {showDelete && (
            <IconWrapper handleClick={deleteHandler} IconName={BsFillTrashFill} />
          )}
        </div>
      </section>
    </div>
  );
};

export default InfoContiner;
InfoContiner.propTypes = {
  children: propTypes.any,
  showDelete: propTypes.bool,
  editHandler: propTypes.func,
  deleteHandler: propTypes.func,
  title: propTypes.string,
};
