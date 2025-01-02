type Props = {
  color: keyof typeof colorVariants;
  children: React.ReactNode;
};

const colorVariants = {
  blue: "bg-blue-600 hover:bg-blue-500 text-white",
  red: "bg-red-500 hover:bg-red-400 text-white",
  yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
} as const;

const DynamicClasses = ({ color, children }: Props) => {
  return (
    <>
      <button className={`${colorVariants[color]}`}>{children}</button>
      {/* Dynamic Class name */}
      <div
        className={`${false ? "text-red-600 font-bold" : "text-green"} text-lg`}
      >
        Dynamic Red
      </div>
        {/* wrong */}
      <div className={`text-${true ? "red" : "green"}`}>Dynamic Red</div>

      <p className={`${false ? 'hover:text-red-300' : 'hover:text-green' } `}>Hover Dynamic Red</p>
    </>
  );
};

export default DynamicClasses;
