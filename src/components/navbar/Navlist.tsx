import Link from "next/link";
import style from "./Navbar.module.css"
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import ThemeSwitcher from "../theme/ThemeSwitcher";

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
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

const Navlist = ({ open, isopen }: { open: any, isopen: any }) => {

  return (
    <>
      <div className={style.SubNav}>
        {
          List.map((list) => {
            return (
              <Link className={`${style.navlink} ${style.desktop}`} key={list.title} href={list.path}>{list.title}</Link>
            )
          })
        }
        <Link className={`${style.navlink} ${style.desktop}`} href={'/auth'} >Log in</Link>
        {/* <ThemeSwitcher /> */}
      </div>
      {isopen ? <RxCross1 className={`${style.menu} ${style.mobile}`} onClick={open} /> : <IoIosMenu className={`${style.menu} ${style.mobile}`} onClick={open} />}
      {
        isopen ? (
          <div className={`${style.mobile} ${style.SubNavmobile} ${style.subactive}`}>
        {
          List.map((list) => {
            return (
              <Link onClick={open} className={style.navlink} key={list.title} href={list.path}>{list.title}</Link>
            )
          })
        }
        <Link onClick={open} className={style.navlink} href={'/auth'} >Log in</Link>
        {/* <ThemeSwitcher /> */}
      </div>
        ) : <div className={`${style.mobile} ${style.SubNavmobile} ${style.subclose}`}>
        {
          List.map((list) => {
            return (
              <Link className={style.navlink} key={list.title} href={list.path}>{list.title}</Link>
            )
          })
        }
        <Link className={style.navlink} href={'/auth'} >Log in</Link>
        {/* <ThemeSwitcher /> */}
      </div>
      }
    </>
  )
}

export default Navlist