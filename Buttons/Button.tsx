export default function Button({
  type = "button",
  disabled = false,
  className,
  onClick,
  children,
}: {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full bg-midnight-green text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-center gap-2 hover:bg-midnight-green/80 transition-colors duration-300 ${
        disabled ? "bg-midnight-green/80!" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
