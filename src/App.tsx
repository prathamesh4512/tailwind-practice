import { PseudoClasses } from "./components/pseudo-classes"

function App() {

  return (
    <div>
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
    </div>
  )
}

export default App

