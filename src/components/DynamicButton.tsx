type ButtonProps = {
  color: keyof typeof colors;
  size: keyof typeof sizes;
  children: React.ReactNode;
};

const sizes = {
  md: "px-4 py-2 rounded-md text-base",
  lg: "px-5 py-3 rounded-lg text-lg",
} as const;

const colors = {
  indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
  cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
} as const;

export default function Button({ color, size, children }: ButtonProps) {
  let colorClasses = colors[color];
  let sizeClasses = sizes[size];

  return (
    <button
      type="button"
      className={`font-bold ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </button>
  );
}


