import Navlist from "./Navlist";
import style from "./Navbar.module.css"
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navbar = () => {

  return (
    <div className={style.NavBar}>
      <div>
        <h1>Devloper</h1>
      </div>
      <ThemeSwitcher />
      <Navlist />
    </div>
  );
};

export default Navbar;
