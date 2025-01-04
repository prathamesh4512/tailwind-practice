
type PropsTypes = {
  showMenu: boolean;
  toggleMenu: () => void;
};

const SideNavigation = ({ showMenu, toggleMenu }: PropsTypes) => {
  return (
    <nav
      className={`h-screen w-80 md:min-w-64 fixed top-0 left-0 z-20 p-4 bg-slate-200 shadow-lg md:relative transition-transform  ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between p-1 items-center">
        <span className="font-bold text-2xl">SideBar</span>
        <button
          className="text-xl hover:bg-slate-300 px-2 py-1 md:hidden"
          onClick={toggleMenu}
        >
          {"<"}
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="py-1 px-2 block hover:bg-slate-300 rounded-md text-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-1 px-2 block hover:bg-slate-300 rounded-md text-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-1 px-2 block hover:bg-slate-300 rounded-md text-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-1 px-2 block hover:bg-slate-300 rounded-md text-lg"
          >
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
