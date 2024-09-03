import { HiUser } from "react-icons/hi";
import "./HiUser.css";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p className="my-text"><HiUser className="my-icon" size="24" /> {name}</p>
    </div>
  );
};

export default UserMenu;