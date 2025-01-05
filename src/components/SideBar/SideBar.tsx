import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const SideBarContext = createContext({ isOpen: true });

const SideBar = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-screen max-w-72 shrink-0
        ${isOpen ? "w-1/4" : "w-auto"} transition-all delay-300
        `}
    >
      <nav className="h-full flex flex-col bg-white shadow-lg">
        <div
          className={`p-4 justify-between flex items-center`}
        >
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`${
              isOpen ? "w-36" : "w-0"
            } overflow-hidden transition-all`}
            alt="logo"
          />
          <button
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-5 
                ${
                  isOpen ? "rotate-0" : "rotate-180"
                } transition-transform duration-300
              `}
            >
              <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <SideBarContext.Provider value={{ isOpen }}>
          <ul className="flex-1 p-4 flex flex-col gap-2 ">{children}</ul>
        </SideBarContext.Provider>
      </nav>
    </aside>
  );
};

export default SideBar;

type ItemPropsType = {
  icon: React.ReactNode;
  data: { name: string; children?: { name: string }[] };
  active?: boolean;
  handleClick: (a: string) => void;
};

export const SideBarItem = ({
  icon,
  data,
  active,
  handleClick,
}: ItemPropsType) => {
  const { isOpen } = useContext(SideBarContext);

  return (
    <>
    <li
      className={`
        flex items-center cursor-pointer rounded-lg p-2 relative
        transition-colors group
        ${active ? "bg-violet-100 text-indigo-800" : "bg-white hover:bg-violet-100/50"}
        `}
      onClick={() => handleClick(data.name)}
    >
      {icon}
      <span
        className={`text-lg font-medium ml-2
                ${isOpen ? "w-auto" : "w-0 overflow-hidden ml-0"} transition-all
            `}
      >
        {data.name}
      </span>
      {/* {true && <div className="size-2 bg-indigo-600 rounded-full absolute right-2"/>} */}
      {!isOpen && (
        <span
          className={`
                bg-indigo-100 text-indigo-800 font-semibold p-2 rounded-md text-sm absolute left-full 
                invisible opacity-20 -translate-x-3 transition-all
                 group-hover:visible group-hover:opacity-100 group-hover:translate-x-2
                `}
        >
          {data.name}
        </span>
      )}
    </li>
    </>
  );
};
