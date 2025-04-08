import Link from "next/link";
import style from '@/styles/Navbar.module.css';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
// import ThemeSwitcher from "../theme/ThemeSwitcher";

const List = [
  // {
  //   title: "Home",
  //   path: "/",
  // },
  {
    title: "Timeline",
    path: "#timelineSection"
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
];

export default function Navlist({ open, isopen }: { open: () => void, isopen: boolean }) {

  return (
    <>
      <CommanNav />
      <ModileNav isopen={isopen} open={open} />
    </>
  );
};

export const CommanNav = () => {
  return (
    <div className={style.SubNav}>
      {List.map((list) => {
        return (
          <Link className={`${style.navlink} ${style.desktop}`} key={list.title} href={list.path}>
            {list.title}
          </Link>
        );
      })}
      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export const ModileNav = ({ isopen, open }: { isopen: boolean, open: () => void }) => {
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
          {/* <ThemeSwitcher /> */}
        </div>
      )}
    </>
  );
};
