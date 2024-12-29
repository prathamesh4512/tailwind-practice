const Interactivity = () => {
  return (
    <div>
      <button
        className="border rounded-md px-2 disabled:cursor-not-allowed"
        disabled
        onClick={() => console.log("hello")}
      >
        Save
      </button>

      <select className="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>

      <textarea className="resize rounded-md"></textarea>

    </div>
  );
};

export default Interactivity;
