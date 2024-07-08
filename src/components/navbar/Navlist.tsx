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
];

const Navlist = ({ open, isopen }: { open: any, isopen: boolean }) => {
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
        <Link className={style.navlink} href={'/profile'} >Profile</Link>
        <Link className={`${style.navlink} ${style.desktop}`} href={'/auth'} >Log in</Link>
        {/* <ThemeSwitcher /> */}
      </div>
      <ModileNav isopen={isopen} open={open} />
    </>
  )
}

export const ModileNav = ({ isopen, open }: { isopen: boolean, open: any }) => {
  return (
    <>
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
            <Link onClick={open} className={style.navlink} href={'/profile'} >Profile</Link>
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
          <Link className={style.navlink} href={'/profile'} >Profile</Link>
          <Link className={style.navlink} href={'/auth'} >Log in</Link>
          {/* <ThemeSwitcher /> */}
        </div>
      }
    </>
  )
}

export default Navlist;