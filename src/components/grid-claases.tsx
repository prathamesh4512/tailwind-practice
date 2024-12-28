const GridClasses = () => {
  return (
    <>
      <div className="mb-20 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <div className="h-20 bg-slate-400 text-white col-span-2">A</div>
        <div className="h-20 bg-slate-400 text-white col-span-full">B</div>
        <div className=" h-20 bg-slate-400 -col-start-3 -col-end-1 ">C</div>
        <div className=" h-20 bg-slate-400">D</div>
        <div className=" h-20 bg-slate-400"></div>
        <div className=" h-20 bg-slate-400"></div>
      </div>
      {/* <div className="grid grid-rows-[200px_minmax(900px,_1fr)_100px]"></div> */}
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
      </div>
      <div className="mt-8 grid gap-4 grid-flow-col-dense">
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
        <div className="w-[250px] h-20 bg-slate-400"></div>
      </div>
    </>
  );
};

export default GridClasses;

// col-auto	// grid-column: auto;
// col-span-1	// grid-column: span 1 / span 1;
// col-span-2	// grid-column: span 2 / span 2;

// col-span-full	// grid-column: 1 / -1;

// col-start-1	 // grid-column-start: 1;
// col-start-2	 // grid-column-start: 2;
// col-end-1	 // grid-column-end: 1;
// col-end-2	 // grid-column-end: 2;

// grid-flow-row-dense	// grid-auto-flow: row dense;
// grid-flow-col-dense	// grid-auto-flow: column dense;


// grid-cols-[250px]  // this is grid-template-columns: 250px & not repeat(1, minmax(0,250px))
// grid-cols-[repeat-250px] // not valid syntax

// grid-cols-[300px_200px_100px]   // grid-template-rows: 300px 200px 100px; 

// grid-cols-[repeat(4,250px)]
// grid-cols-[repeat(auto-fit,minmax(250px,1fr))]