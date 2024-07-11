import Link from "next/link";
import style from "./Navbar.module.css"
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Loading from "./loading";

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

const Navlist = ({ open, isopen, sessionUser, loading }: { open: any, isopen: boolean, sessionUser: any, loading: boolean }) => {

  if (loading) {
    return <Loading />
  }

  if (!sessionUser) {
    return <div>No session found.</div>
  }

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
        {sessionUser ? <Link className={`${style.navlink} ${style.desktop}`} href={'/profile'} >Profile</Link>: null}
        {sessionUser ? <Link className={`${style.navlink} ${style.desktop}`} href={'/logout'} >Log out</Link> :<Link className={`${style.navlink} ${style.desktop}`} href={'/auth'} >Log in</Link>}
        {/* <ThemeSwitcher /> */}
      </div>
      <ModileNav isopen={isopen} open={open} sessionUser={sessionUser} />
    </>
  )
}

export const ModileNav = ({ isopen, open,sessionUser }: { isopen: boolean, open: any, sessionUser:any }) => {
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
            {sessionUser ? <Link className={style.navlink} href={'/profile'} >Profile</Link>: null}
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
          {/* {sessionUser ? <Link className={style.navlink} href={'/profile'} >Profile</Link>: null} */}
          <Link className={style.navlink} href={'/auth'} >Log in</Link>
          {/* <ThemeSwitcher /> */}
        </div>
      }
    </>
  )
}

export default Navlist;