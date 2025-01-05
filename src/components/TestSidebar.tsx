import { useState } from "react";
import SideBar, { SideBarItem } from "./SideBar/SideBar";

const SIDEBAR_DATA = [
  { name: "Dashboard", children: [] },
  { name: "Statistics", children: [] },
  { name: "Users", children: [] },
  { name: "Inventory", children: [] },
  { name: "Orders", children: [] },
  { name: "Billing", children: [] },
  { name: "Settings", children: [] },
  { name: "Help", children: [] },
];

const DummyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
  </svg>
);

const TestSidebar = () => {
  const [activeItem, setActiveItem] = useState(SIDEBAR_DATA[0].name);

  const handleClick = (value: string) => {
    setActiveItem(value);
  };

  return (
    <div className="flex">
      <SideBar>
        {SIDEBAR_DATA.map((data) => (
          <SideBarItem
            icon={DummyIcon}
            data={data}
            active={activeItem === data.name}
            handleClick={handleClick}
          />
        ))}
      </SideBar>
      <div className="flex-1">
        <header className="p-4 shadow-lg">
          <h2 className="font-bold text-2xl">Header</h2>
        </header>
        <div className="p-6">
          <p className="text-xl">Content</p>
        </div>
      </div>
    </div>
  );
};

export default TestSidebar;
