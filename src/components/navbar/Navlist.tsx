import Link from "next/link";
import style from "./Navbar.module.css"
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navlist = ({ open, isopen }: { open: any, isopen: any }) => {
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
    <>
      <div className={style.SubNav}>
        {
          List.map((list) => {
            return (
              <Link className={style.navlink} key={list.title} href={list.path}>{list.title}</Link>
            )
          })
        }
        {/* <ThemeSwitcher /> */}
      </div>
      {isopen ? <RxCross1 className={style.menu} onClick={open} /> : <IoIosMenu className={style.menu} onClick={open} />}
      {
        isopen && (
          <div className={style.SubNav}>
        {
          List.map((list) => {
            return (
              <Link className={style.navlink} key={list.title} href={list.path}>{list.title}</Link>
            )
          })
        }
        {/* <ThemeSwitcher /> */}
      </div>
        )
      }
    </>
  )
}

export default Navlist