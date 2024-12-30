const Options = () => {
  return (
    <>
    <section className="grid place-items-center p-10 text-sm text-slate-200">
      <div className="grid w-72 grid-cols-[auto,1fr,auto] gap-x-2 gap-y-4 rounded-xl bg-slate-800 p-4 text-sm shadow">
        <a className="col-span-full grid grid-cols-subgrid" href="#">
          <svg
            viewBox="0 0 20 20"
            className="mr-2 h-5 w-5 self-start fill-slate-400"
          >
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path
              fill-rule="evenodd"
              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <p>Open</p>
            <span className="text-slate-400">Open the file in a new tab.</span>
          </div>
        </a>

        <a className="col-span-full grid grid-cols-subgrid" href="#">
          <div className="col-start-2">
            <p>Rename</p>
            <span className="text-slate-400">Rename the file.</span>
          </div>
        </a>

        <a className="col-span-full grid grid-cols-subgrid" href="#">
          <svg
            viewBox="0 0 20 20"
            className="mr-2 h-5 w-5 self-start fill-slate-400"
          >
            <path
              fill-rule="evenodd"
              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <p>Delete</p>
            <span className="text-sm/6 text-slate-400">
              Move the file to the trash.
            </span>
          </div>
        </a>
      </div>

      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 checked "></div>


<button disabled className="bg-white text-black disabled:bg-gray disabled:text-white">Submit</button>




    </section>




</>
  );
};

export default Options;
