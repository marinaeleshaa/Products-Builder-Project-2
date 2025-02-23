import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?:'w-full'|'w-fit'
}
const Button = ({ children, className,width='w-full', ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} text-center p-2 rounded-xl text-white capitalize hover:opacity-70 transition duration-200`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
