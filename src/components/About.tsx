import "./about.css";

const About = () => {
  return (
    <div>
      <p data-type="primary">Hello About !!</p>
      <p data-type="secondary">Hello About !!</p>
      <p style={{ color: "violet" }} className="id1">
        Red
      </p>

      <div className="border">
        <div className="size-20 bg-slate-500 sticky top-4"></div>
        <div className="size-20 bg-amber-500  "></div>
      </div>

      <p className="[text-shadow:1px_1px_1px_blue]">Hello</p>

      {/* {[1,2,3,4,5,6].map(e=>(
          <li className="[background:black] [color:pink] [padding:10px]" >{e}</li>
        ))} */}
      <ul className="[&>:not(li)]:[text-shadow:1px_1px_1px_blue]">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <li className="[&:hover]:text-3xl">{e}</li>
        ))}

        {[1, 2, 3, 4, 5, 6].map((e) => (
          <p>{e}</p>
        ))}
      </ul>

      <p className="text_shadow ">Hello</p>

      {/* <div className="size-20 bg-slate-500 z-10 sticky"></div>
      <div className="size-20 bg-amber-500 -mt-4"></div> */}

      <div>
        <article className="print:hidden">
          <h1>My Secret Pizza Recipe</h1>
          <p>This recipe is a secret, and must not be shared with anyone</p>
        </article>
        <div className="hidden print:block">
          Are you seriously trying to print this? It's secret!
        </div>
      </div>

      <div className="bg-black p-4 flex z-50">
        <div className="size-20 bg-slate-500 z-10"></div>
        <div className="size-20 bg-amber-500 -ml-4 z-20"></div>
      </div>

      <div className=" border size-10 w-[calc(100vw_-_100px)]"></div>

      <div data-size="large" className="data-[size=large]:p-8"></div>

      <input min="1" max="5" className="in-range:border-green-500 ..." />
      <input min="1" max="5" className="out-of-range:border-red-500 ..." />

      <ul className="*:text-orange">
        <li>Hello 1</li>
        <li>Hello 1</li>
        <li>Hello 1</li>
        <li>Hello 1</li>
        <span>Span</span>
      </ul>

      <ul className="">
        {[1, 2, 3, 4, 5].map((e) => (
          <li key={e} className="[&:nth-child(3n)]:text-red-500">
            {e}
          </li>
        ))}
      </ul>

      <ul className="">
        {[1, 2, 3, 4, 5].map((e) => (
          <li key={e} className="[&:is(:hover,:active)]:text-green">
            {e}
          </li>
        ))}
      </ul>

      <ul>
        {[1, 2, 3, 4, 5].map((e) => (
          <li key={e} className="[&:not(:nth-child(3n))]:text-violet-500">
            {e}
          </li>
        ))}
      </ul>

      <ul>
        <li className="[&:nth-child(3n)]:text-pink">Hello 1</li>
        <li className="[&:nth-child(3n)]:text-pink">Hello 1</li>
        <li className="[&:nth-child(3n)]:text-pink">Hello 1</li>

        <span className="[&:nth-of-type(3n+1)]:text-pink">Hello span</span>
        <span className="[&:nth-of-type(3n+1)]:text-pink">Span</span>
      </ul>

      <ul className="[&>li]:[color:gray]">
        <li>Hello 1</li>
        <li>Hello 1</li>
        <span>Span</span>
      </ul>

      <ul className="[&>li]:[color:gray]">
        <li>Hello 1</li>
        <li>Hello 1</li>
        <li>Hello 1</li>
        <li>Hello 1</li>
        <span>Span</span>
      </ul>

      <div className="[&>*]:[color:red]" />
      <div className="[&>*]:text-red-200" />

      <p className="!font-medium font-bold">
        This will be medium even though bold comes later in the CSS.
      </p>

      <p className="!text-[red] text-violet-300" >
        color will be read
      </p>

      <p className="![color:red] text-violet-300">
        Red color
      </p>

      <p className="sm:hover:!font-bold" />
      <p className="[&:not(.class-name)]:!font-bold" />
      <p className="[&:not(.class-name)]:![font-weight:bold]" />

    
    </div>
  );
};

export default About;


