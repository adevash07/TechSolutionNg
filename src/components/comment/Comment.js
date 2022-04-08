import propTypes from "prop-types";
import { BsQuestion } from "react-icons/bs";
import "./comment.scss";
const Comment = ({ title, children, customClass }) => {
  return (
    <div className={`comment ${customClass}`}>
      <div>
        <small>{title}</small>
        <span>
          <BsQuestion />
        </span>
      </div>
      <div className="comment-content">{children}</div>
    </div>
  );
};
export default Comment;
Comment.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
  customClass: propTypes.string,
};
