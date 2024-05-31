import Link from "next/link";
import style from "./Navbar.module.css"

const Navlist = ( )=> {

    const List = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        }
      ];

    return (
        <div className={style.SubNav}>
        {
            List.map((list) => {
                return (
                    <Link key={list.title} href={list.path}>{list.title}</Link>
                )
            })
        }
      </div>
    )
}

export default Navlist