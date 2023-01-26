import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

const DropdownCustom = ({title, submenu}) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return <Dropdown isOpen={dropdown} toggle={toggleDropdown} >
    <DropdownToggle className="nav-item text-white bg-primary border-primary" caret>{title}</DropdownToggle>
    <DropdownMenu>
        {submenu.map((item)=>{
          return (
            <DropdownItem key={item[0]}><Link to={item[1]} className="text-decoration-none">{item[0]}</Link></DropdownItem>)
        })}
    </DropdownMenu>
  </Dropdown>;
};

export default DropdownCustom;
