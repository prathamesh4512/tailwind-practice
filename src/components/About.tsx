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

        <div className="bg-black p-4 flex z-50">
        <div className="size-20 bg-slate-500 z-10"></div>
        <div className="size-20 bg-amber-500 -ml-4 z-20"></div>
        </div>

        <div className=" border size-10 w-[calc(100vw_-_100px)]">

        </div>


    </div>
  );
};

export default About;
