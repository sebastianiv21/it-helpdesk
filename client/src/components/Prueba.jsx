// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faRightFromBracket,
//   faRightToBracket,
// } from "@fortawesome/free-solid-svg-icons";
import DropdownCustom from "./DropdownCustom";
import NavMenuData from "../shared/NavMenuData";

const Prueba = () => {
  return (
    <ul>
      {NavMenuData.map((item, index) => (
        <li key={index}>
          <DropdownCustom title={item.title} submenu={item.submenu} />
        </li>
      ))}
    </ul>
  );
};

export default Prueba;
