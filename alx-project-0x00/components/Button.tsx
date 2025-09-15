import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-semibold
        hover:bg-blue-700 transition
        ${sizeClasses[size]} ${shape} ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
