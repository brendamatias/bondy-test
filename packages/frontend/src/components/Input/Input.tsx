import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className="flex flex-col gap-1 font-semibold text-gray-700 text-sm">
      {label}
      <input {...props} className="border rounded-lg px-4 py-2" />
    </label>
  );
};
