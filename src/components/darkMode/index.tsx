import "./index.css";

const DarkMode = () => {
  return (
    <>
      <div className="box theme-a">Theme A</div>
   
      <br />

      <div className="box theme-b">Theme B</div>

      <p className="[&:hover]:text-red-100"></p>
      <p className="[&:focus]:text-red-100"></p>
      <p className="[&:is(:focus,:hover)]:text-red-100"></p>

      
      <div className="[&>*]:[color:red]"/>
      <div className="[&>*]:text-red-200"/>
      <div className="[&>p]:[color:red]"/>
      <div className="[&+p]:text-red-200"/>

      



    </>
  );
};

export default DarkMode;
