const FlexClasses = () => {
  return (
    <div>
      <div className="flex items-stretch ...">
        <div className="py-4">01</div>
        <div className="py-12">02</div>
        <div className="py-8">03</div>
      </div>

      <div className="flex gap-4 h-[200px]  
      bg-[url('/images/abc.svg')]
      "
    
      >
      {/* <p className="border border-black flex-1/2">D</p> */}
      {/* <p className="border flex-1">b</p> */}
      {/* <p className="border flex-1">c</p> */}
      {/* <p className="border flex-1/2">d</p> */}
    </div> 
    </div>
  );
};

export default FlexClasses;
