import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  return (
    <button 
      {...props} 
      className={`
        cursor-pointer 
        transition-all 
        duration-300 
        hover:scale-105 
        active:scale-95 
        hover:shadow-lg 
        ${className}
      `}
    >
      {children}
    </button>
  );
}