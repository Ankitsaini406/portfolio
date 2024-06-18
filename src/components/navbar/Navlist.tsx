import Link from "next/link";
import style from "./Navbar.module.css"
import { IoIosMenu } from "react-icons/io";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navlist = ()=> {
    const List = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Projects",
          path: "/projects",
        }
      ];

    return (
        <div className={style.SubNav}>
        {
            List.map((list) => {
                return (
                    <Link className={style.navlink} key={list.title} href={list.path}>{list.title}</Link>
                )
            })
        }
        <IoIosMenu className={style.menu}/>
        {/* <ThemeSwitcher /> */}
      </div>
    )
}

export default Navlist