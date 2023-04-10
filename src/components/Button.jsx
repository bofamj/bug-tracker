import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faTrash } from "@fortawesome/free-solid-svg-icons";

const Button = ({ cleckHandeler, name, iconType }) => {
  const tagType = () => {
    if (iconType === "delete") {
      return (
        <FontAwesomeIcon
          icon={faTrash}
          size="xl"
          style={{ color: "#d11a2a" }}
        />
      );
    } else {
      return (
        <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "#1256af" }} />
      );
    }
  };
  return (
    <button className="btn__icon" onClick={() => cleckHandeler()}>
      {tagType()}
    </button>
  );
};

export default Button;
