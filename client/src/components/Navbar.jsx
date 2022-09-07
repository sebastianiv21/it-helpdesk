import { useContext } from "react";
import DataContext from "../context/DataContext";

//Componentes
import NavInfo from "./NavInfo";
import NavMenu from "./NavMenu"

const Navbar = () => {
  const { user, setUser } = useContext(DataContext);
  return (
    <>
    <NavInfo user={user} />
    <NavMenu user={user} />
    </>
  );
};

export default Navbar;
