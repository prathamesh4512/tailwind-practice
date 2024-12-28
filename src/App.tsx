import FlexClasses from "./components/flex-classes"
import GridClasses from "./components/grid-claases"
import { PseudoClasses } from "./components/pseudo-classes"
import UtilityClasses from "./components/utility-classes";
import Subgrid from "./components/subgrid";
import Testimonial from "./components/Testimonial";
import Options from "./components/Options";
import Spacing from "./components/Spacing";

function App() {

  return (
    <>
    <Spacing />
    {/* <Testimonial /> */}
    {/* <Subgrid /> */}
    {/* <Options /> */}
    {/* <GridClasses/> */}
    <FlexClasses />
    <UtilityClasses />

      <p className="-m-[10px] min-w-f" >Temp p</p>
      <div className="abc rounded-50 h-10 w-10 bg-slate-400 text-white">
        50%
      </div>
      <ul>
        <li>h1</li>
        <li>h2</li>
        <li>h3</li>

      </ul>
      <PseudoClasses/>
      <div className="max-sm:text-red-400">
        hello
      </div>
      <p className="dark:text-pink-400 text-red-400 ">
      dark
      </p>
      <a href="hello">Hello Anchor</a>

      <div className="flex-row-center">
      <p>h1</p>
      <p>h2</p>
      </div>
    </>
  )
}

export default App

