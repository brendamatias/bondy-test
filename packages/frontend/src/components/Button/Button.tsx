import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium";
}

export const Button = ({
  children,
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-[#342FEA] rounded-lg ${size === "small" ? "text-sm py-2 px-4" : "py-3 px-4"} text-white font-semibold`}
    >
      {children}
    </button>
  );
};
