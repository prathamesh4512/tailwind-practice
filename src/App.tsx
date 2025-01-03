import FlexClasses from "./components/flex-classes";
import GridClasses from "./components/grid-claases";
import { PseudoClasses } from "./components/pseudo-classes";
import UtilityClasses from "./components/utility-classes";
import Subgrid from "./components/subgrid";
import Testimonial from "./components/Testimonial";
import Options from "./components/Options";
import Spacing from "./components/Spacing";
import Interactivity from "./components/Interactivity";
import About from "./components/About";
import DarkMode from "./components/darkMode";
import DynamicClasses from "./components/DynamicClasses";
import First from "./components/responsive/First";
import Second from "./components/responsive/Second";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="flex flex-col gap-4 px-8 mt-5">
      <ContactForm/>
      <First />
      <Second />

      <DynamicClasses color="blue"> </DynamicClasses>
      {/* <DarkMode /> */}
      <About />
      {/* <PseudoClasses/> */}
      {/* <Options /> */}
      {/* <Interactivity /> */}
      {/* <Spacing /> */}
      {/* <Testimonial /> */}
      {/* <Subgrid /> */}
      {/* <GridClasses/> */}
      {/* <FlexClasses /> */}
      {/* <UtilityClasses /> */}

      <p className="-m-[10px] min-w-f">Temp p</p>
      <div className="abc rounded-50 h-10 w-10 bg-slate-400 text-white">
        50%
      </div>

      <div className="max-sm:text-red-400">hello</div>
      <p className="dark:text-pink-400 text-red-400 ">dark</p>
      <a href="hello">Hello Anchor</a>

      <div className="flex-row-center">
        <p>h1</p>
        <p>h2</p>
      </div>

      <div className="shadow hover:shadow-lg"></div>

      <div className="size-20 brightness-[1] opacity-[0.1] bg-fuchsia-400"></div>

      <div className="size-20 bg-neutral-400 border"></div>

      <table className="">
        <thead>
          <tr>
            <th className="border">State</th>
            <th className="border">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Indiana</td>
            <td className="border border-slate-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Ohio</td>
            <td className="border border-slate-700 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Michigan</td>
            <td className="border border-slate-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
