import Link from "next/link";

export default function Navbar() {
  const List = [
    { title: "Home", path: "#home" },
    { title: "Timeline", path: "#timelineSection" },
    { title: "Projects", path: "#projects" },
    { title: "About", path: "#about" },
  ];

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 flex w-max border rounded-full p-2 px-4 gap-5 text-accent-light z-20 
      bg-white/20 backdrop-blur-lg border-white/20 shadow-lg transition-all duration-300"
    >
      {/* <div className="font-bold text-lg">@ Ankit</div> */}
      <div className="flex items-center gap-6">
        {List.map((list) => (
          <Link
            key={list.title}
            href={list.path}
            className="font-bold text-lg text-[var(--main-color)] hover:text-[var(--text-color)] transition-all "
          >
            {list.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
