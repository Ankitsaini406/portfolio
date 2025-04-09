import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const List = [
  { title: "Timeline", path: "#timelineSection" },
  { title: "Projects", path: "#projects" },
  { title: "About", path: "#about" },
];

export default function Navlist({ open, isopen }: { open: () => void, isopen: boolean }) {
  return (
    <>
      <CommanNav />
      <ModileNav isopen={isopen} open={open} />
    </>
  );
}

export const CommanNav = () => {
  return (
    <div className="hidden md:flex items-center gap-6">
      {List.map((list) => (
        <Link key={list.title} href={list.path} className="font-bold text-lg text-[var(--main-color)] hover:text-[var(--text-color)] transition-all">
          {list.title}
        </Link>
      ))}
    </div>
  );
};

export const ModileNav = ({ isopen, open }: { isopen: boolean, open: () => void }) => {
  return (
    <>
      {isopen ? (
        <RxCross1 className="md:hidden text-3xl text-[var(--main-color)] cursor-pointer" onClick={open} />
      ) : (
        <IoIosMenu className="md:hidden text-3xl text-[var(--main-color)] cursor-pointer" onClick={open} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-black flex flex-col items-center gap-6 pt-16
        transition-all duration-500 ease-out transform ${isopen ? "translate-x-0" : "translate-x-full"}`}
      >
        {List.map((list) => (
          <Link key={list.title} href={list.path} className="text-xl font-semibold text-white hover:text-gray-300" onClick={open}>
            {list.title}
          </Link>
        ))}
      </div>
    </>
  );
};
