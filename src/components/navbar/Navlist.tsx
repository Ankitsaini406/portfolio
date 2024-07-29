import Link from "next/link";
import style from '@/styles/Navbar.module.css';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Loading from "./loading";
import { logout } from "@/lib/cookies/actions";

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

const handleFunction = (event: any, open: any) => {
  event.preventDefault();
  open();
  logout();
  // You can add any other function calls here
};

const Navlist = ({ open, isopen, sessionUser, loading, isAdmin, isHomePage }: { open: any, isopen: boolean, sessionUser: any, loading: boolean, isAdmin: any, isHomePage: any }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CommanNav sessionUser={sessionUser} isAdmin={isAdmin} isHomePage={isHomePage} />
      <ModileNav isopen={isopen} open={open} sessionUser={sessionUser} isAdmin={isAdmin} isHomePage={isHomePage} />
    </>
  );
};

export const CommanNav = ({ sessionUser, isAdmin, isHomePage }: { sessionUser: any, isAdmin: any, isHomePage: any }) => {
  return (
    <div className={style.SubNav}>
      {List.map((list) => {
        return (
          <Link className={`${style.navlink} ${style.desktop}`} key={list.title} href={list.path}>
            {list.title}
          </Link>
        );
      })}
      {isHomePage && (
        <Link className={`${style.navlink} ${style.desktop}`} href="#timelineSection">
          Timeline
        </Link>
      )}
      {sessionUser ? (
        <Link className={`${style.navlink} ${style.desktop}`} href={'/profile'}>
          Profile
        </Link>
      ) : (
        <Link className={`${style.navlink} ${style.desktop}`} href={'/auth'}>
          Profile
        </Link>
      )}
      {isAdmin ? <Link className={`${style.navlink} ${style.desktop}`} href={'/admin'}>Admin</Link> : null}
      {sessionUser ? (
        <Link onClick={() => logout()} className={`${style.navlink} ${style.desktop}`} href={'/'}>
          Log out
        </Link>
      ) : (
        <Link className={`${style.navlink} ${style.desktop}`} href={'/auth'}>
          Log in
        </Link>
      )}
      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export const ModileNav = ({ isopen, open, sessionUser, isAdmin, isHomePage }: { isopen: boolean, open: any, sessionUser: any, isAdmin: any, isHomePage: any }) => {
  return (
    <>
      {isopen ? (
        <RxCross1 className={`${style.menu} ${style.mobile}`} onClick={open} />
      ) : (
        <IoIosMenu className={`${style.menu} ${style.mobile}`} onClick={open} />
      )}
      {isopen ? (
        <div className={`${style.mobile} ${style.SubNavmobile} ${style.subactive}`}>
          {List.map((list) => {
            return (
              <Link onClick={open} className={style.navlink} key={list.title} href={list.path}>
                {list.title}
              </Link>
            );
          })}
          {isHomePage && (
            <Link onClick={open} className={style.navlink} href="#timelineSection">
              Timeline
            </Link>
          )}
          {sessionUser ? (
            <Link onClick={open} className={style.navlink} href={'/profile'}>
              Profile
            </Link>
          ) : (
            <Link onClick={open} className={style.navlink} href={'/auth'}>
              Profile
            </Link>
          )}
          {/* {isAdmin ? <Link className={`${style.navlink} ${style.desktop}`} href={'/admin'}>Admin</Link> : null} */}
          {sessionUser ? (
            <Link onClick={(event) => handleFunction(event, open)} className={style.navlink} href={'/'}>
              Log out
            </Link>
          ) : (
            <Link onClick={open} className={style.navlink} href={'/auth'}>
              Log in
            </Link>
          )}
          {/* <ThemeSwitcher /> */}
        </div>
      ) : (
        <div className={`${style.mobile} ${style.SubNavmobile} ${style.subclose}`}>
          {List.map((list) => {
            return (
              <Link className={style.navlink} key={list.title} href={list.path}>
                {list.title}
              </Link>
            );
          })}
          {isHomePage && (
            <Link onClick={open} className={style.navlink} href="#timelineSection">
              Timeline
            </Link>
          )}
          {sessionUser ? (
            <Link onClick={open} className={style.navlink} href={'/profile'}>
              Profile
            </Link>
          ) : (
            <Link onClick={open} className={style.navlink} href={'/auth'}>
              Profile
            </Link>
          )}
          {/* {isAdmin ? <Link className={`${style.navlink} ${style.desktop}`} href={'/admin'}>Admin</Link> : null} */}
          {sessionUser ? (
            <Link onClick={(event) => handleFunction(event, open)} className={style.navlink} href={'/'}>
              Log out
            </Link>
          ) : (
            <Link onClick={open} className={style.navlink} href={'/auth'}>
              Log in
            </Link>
          )}
          {/* <ThemeSwitcher /> */}
        </div>
      )}
    </>
  );
};

export default Navlist;
