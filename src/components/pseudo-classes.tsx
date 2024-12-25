export const PseudoClasses = () => {
  return (
    <>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        Save changes
      </button>

      <ul>
        {[1,2,3].map(ele=>(
            <li key={ele} className="p-4 first:pt-0 last:pb-0">
                {ele}
            </li>
        ))}
      </ul>

      <table>
  <tbody>
      <tr className="odd:bg-white even:bg-slate-50">
        <td>{"Abc"}</td>
        <td>{"Xyz"}</td>
      </tr>
      <tr className="odd:bg-white even:bg-slate-50">
        <td>{"Abc"}</td>
        <td>{"Xyz"}</td>
      </tr>
  </tbody>
</table>


<ul role="list">
    <li className="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">"person.name"</a>
        <p>"person.title"</p>
      </div>
      <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span className="group-hover/edit:text-gray-700 ...">Call</span>
        <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        </svg>
      </a>
    </li>
</ul>

{/*(has-{modifier})*/}
<label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
  <svg fill="currentColor">
  </svg>
  Google Pay
  <input type="radio" className="checked:border-indigo-500 ..." />
</label>

{/* (group-has-{modifier}) */}

<div className="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg className="hidden group-has-[a]:block">
  </svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>

{/* (peer-has-{modifier}) */}
<fieldset>
  <legend>Today</legend>
  <div>
    <label className="peer">
      <input type="checkbox" name="todo[1]" checked />
      Create a to do list
    </label>
    <svg className="peer-has-[:checked]:invisible  visible">
    </svg>
  </div>

</fieldset>

{/* Before After */}
<label className="block">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>


{/* Placeholder */}
<label className="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>

<p className="selection:bg-pink-400 selection:text-pink-600"></p>

{/* portrait landscape */}
<div>
  <div className="portrait:hidden">
    Portrait
  </div>
  <div className="landscape:hidden">
    <p>
      This experience is designed to be viewed in landscape. Please rotate your
      device to view the site.
    </p>
  </div>
</div>

{/* aria */}
<div aria-checked="true" className="bg-gray-600 aria-checked:bg-sky-700">
</div>

    </>
  );
};


