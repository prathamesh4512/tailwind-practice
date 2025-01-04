import { useEffect, useState } from "react";

const NavigationBar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [shrinkNavBar, setShrinkNavBar] = useState(false)

  const toggleMenu = () => {
    setShowMenu(prev=>!prev);
  }

  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY > window.innerHeight){
        setShrinkNavBar(true)
      }else{
        setShrinkNavBar(false)
      }
    }

    window.addEventListener("scroll",handleScroll)

   return () => window.addEventListener("scroll",handleScroll)
  },[])

  return (
    <div>
      <header className={`bg-sky-500 p-4 flex justify-between  items-center fixed top-0 w-full md:px-6
        ${shrinkNavBar ? 'py-2 md:py-0':'py-4 md:py-1'}
        transition-all
        `}>
        <a href="#">
          <img
            src="https://res.cloudinary.com/thirus/image/upload/v1631988912/logos/chitchat-logo_pkpwwu.png"
            className={`${shrinkNavBar ? 'w-28':'w-32'} transition-[width]`}
          />
        </a>
        <nav>
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <ul className={`text-white text-right fixed left-0 right-0 bg-sky-500 h-fit p-4 py-2 transition-transform ${showMenu?'translate-x-0' : 'translate-x-full'} 
        md:static md:flex md:translate-x-0  md:px-0 transition-all
        ${shrinkNavBar ? 'md:text-lg md:py-1':'md:text-xl'}
        `}>
          <li>
            <a href="#" className="font-bold hover:bg-slate-100/15 rounded block p-2" >Home</a>
          </li>
          <li>
          <a href="#" className="font-bold hover:bg-slate-100/15 rounded block p-2" >About</a>
          </li>
          <li>
          <a href="#" className="font-bold hover:bg-slate-100/15 rounded block p-2" >Contact</a>
          </li>
          <li>
          <a href="#" className="font-bold hover:bg-slate-100/15 rounded block p-2" >About</a>
          </li>
        </ul>
        </nav>
      </header>
      <div className="h-[300vh] bg-slate-300 mt-16">

      </div>
    </div>
  );
};

export default NavigationBar;
