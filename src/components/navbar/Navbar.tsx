import Navlist from "./Navlist";
import style from "./Navbar.module.css"

const Navbar = () => {

  return (
    <div className={style.NavBar}>
      <div>
        <h1>Devloper</h1>
      </div>
      <Navlist />
    </div>
  );
};

export default Navbar;
